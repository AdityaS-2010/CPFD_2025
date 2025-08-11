require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const ASSISTANT_API_ID = process.env.ASSISTANT_API_ID;
app.options('*', cors());
const allowedOrigins = [
  'http://localhost:5500',
  'http://127.0.0.1:5500'
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

app.post('/api/optimize-planner', async (req, res) => {
  try {


    let { question } = req.body;
    console.log('[API] Received question:', question);

    if (!question) {
      console.log('[API] No question provided.');
      return res.status(400).json({ error: "No question provided." });
    }

    // Limit prompt to 350 characters
    const charLimit = 350;
    if (question.length > charLimit) {
      console.log(`[API] Question too long: ${question.length} chars (limit: ${charLimit})`);
      return res.status(400).json({ error: `Your question is too long (${question.length} characters). Please limit your question to ${charLimit} characters or fewer.` });
    }


    // 1. Create a thread
    console.log('[API] Creating thread...');
    let response = await fetch('https://api.openai.com/v1/threads', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2'
      }
    });
    const thread = await response.json();
    if (!thread.id) {
      console.log('[API] Failed to create thread:', thread);
      throw new Error(thread.error?.message || 'Failed to create thread');
    }
    console.log('[API] Thread created:', thread.id);

    // 2. Add the user's question to the thread
    console.log('[API] Adding message to thread...');
    response = await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2'
      },
      body: JSON.stringify({
        role: "user",
        content: question
      })
    });
    const messageResult = await response.json();
    if (messageResult.error) {
      console.log('[API] Error adding message:', messageResult.error);
      throw new Error(messageResult.error.message);
    }
    console.log('[API] Message added.');

    // 3. Run the assistant on the thread
    console.log('[API] Starting assistant run...');
    response = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2'
      },
      body: JSON.stringify({
        assistant_id: ASSISTANT_API_ID
      })
    });
    const run = await response.json();
    if (!run.id) {
      console.log('[API] Failed to start run:', run);
      throw new Error(run.error?.message || 'Failed to start run');
    }
    console.log('[API] Run started:', run.id);

    // 4. Poll for completion
    const MAX_ATTEMPTS = 10;
    let runStatus;
    let pollCount = 0;
    do {
      pollCount++;
      await new Promise(r => setTimeout(r, 2000));
      response = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs/${run.id}`, {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
          'OpenAI-Beta': 'assistants=v2'
        }
      });
      runStatus = await response.json();
      console.log(`[API] Poll attempt ${pollCount}: status = ${runStatus.status}`);
      if (!runStatus.status || pollCount >= MAX_ATTEMPTS) {
        break;
      }
    } while (runStatus.status !== 'completed');

    if (runStatus.status !== 'completed') {
      console.log('[API] Assistant run did not complete.');
      throw new Error('Assistant run did not complete.');
    }

    // 5. Get the assistant's response
    console.log('[API] Fetching assistant response...');
    response = await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2'
      }
    });
    const messages = await response.json();

    // Parse the assistant's reply
    const assistantMessage = messages.data.reverse().find(msg => msg.role === "assistant");
    let reply = null;
    if (assistantMessage && assistantMessage.content && assistantMessage.content.length > 0) {
      reply = assistantMessage.content[0].text.value.trim();
    }

    if (!reply) {
      console.log('[API] No assistant reply found.');
      return res.status(500).json({ error: "No assistant reply found." });
    }

    console.log('[API] Reply:', reply);
    res.json({ reply });
  } catch (error) {
    console.error('[API] Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Planner backend running. Frontend at http://localhost:5500/Pathways/business.html, backend API at http://localhost:3000/api/optimize-planner');
});