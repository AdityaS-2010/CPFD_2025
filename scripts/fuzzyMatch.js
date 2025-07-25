// === Fuzzy Matching with Fuse.js ===
// Assumes Fuse.js is loaded globally via a <script> tag in HTML
// Assumes courseCatalog is globally available (from catalog.js)

const fuse = new Fuse(courseCatalog, {
  keys: ['name'],
  threshold: 0.35,             
  includeScore: true,
  ignoreLocation: true,       
  minMatchCharLength: 2       
});


// Helper to clean input
function cleanInput(str) {
  return str.trim().toLowerCase();
}

function getCourseSequence(baseName) {
  const prefix = baseName.split(" ")[0].toLowerCase();
  const related = courseCatalog.filter(c => c.name.toLowerCase().startsWith(prefix));
  const sequenceSet = new Set();

  // Step 1: Traverse prerequisites up
  function addPrereqsRecursively(course) {
    if (!course || sequenceSet.has(course.name)) return;
    (course.prerequisites || []).forEach(pr => {
      const prereq = courseCatalog.find(c => c.name === pr);
      if (prereq) addPrereqsRecursively(prereq);
    });
    sequenceSet.add(course.name);
  }

  const targetCourse = courseCatalog.find(c => c.name.toLowerCase() === baseName.toLowerCase());
  if (targetCourse) {
    addPrereqsRecursively(targetCourse);
  }

  // Step 2: Traverse prerequisites down (find descendants)
  let addedNew;
  do {
    addedNew = false;
    courseCatalog.forEach(course => {
      const hasMatch = (course.prerequisites || []).some(p => sequenceSet.has(p));
      if (hasMatch && !sequenceSet.has(course.name)) {
        sequenceSet.add(course.name);
        addedNew = true;
      }
    });
  } while (addedNew);

  // Step 3: Sort by prereq chain
  const sorted = [];
  const added = new Set();
  function sortRecursive(course) {
    if (added.has(course.name)) return;
    (course.prerequisites || []).forEach(pr => {
      const prereq = courseCatalog.find(c => c.name === pr);
      if (prereq) sortRecursive(prereq);
    });
    sorted.push(course.name);
    added.add(course.name);
  }

  [...sequenceSet].map(name => courseCatalog.find(c => c.name === name)).forEach(sortRecursive);

  // Step 4: Filter courses by prefix
  const finalSequence = sorted.filter(name => name.toLowerCase().startsWith(prefix));

  // Log the sequence for debugging
  console.log(`Sequence for "${baseName}":`, finalSequence);

  return finalSequence;
}


// Main matching function
function getBestCourseMatch(input) {
  const cleaned = cleanInput(input);
  if (!cleaned) return null;

  // 0. Check for exact match FIRST
  const exact = courseCatalog.find(c => cleanInput(c.name) === cleaned);
  if (exact) return exact;

  // 1. Fuzzy match if no exact match
  const result = fuse.search(cleaned);

  // Filter matches by prefix
  const prefix = cleaned.split(" ")[0];
  const filteredResult = result.filter(r => r.item.name.toLowerCase().startsWith(prefix));
  if (!filteredResult.length) {
    return null;
  }

  const baseMatch = filteredResult[0].item;

  // 2. Get all courses currently in planner
  const currentCourses = getAllCoursesInPlanner();

  // 3. If course is in a sequence, check for next course
  const sequence = getCourseSequence(baseMatch.name);
  const remainingSequence = sequence.filter(courseName => !currentCourses.includes(courseName));

  if (remainingSequence.length > 0) {
    const nextName = remainingSequence[0];
    return courseCatalog.find(c => c.name === nextName) || baseMatch;
  }

  return baseMatch;
}



// Automatically correct input fields in the table
function monitorTableInputs() {
  const table = document.querySelector("table"); // Adjust selector if needed
  if (!table) return;

  let debounceTimer; // Declare the debounce timer

  table.addEventListener("input", (event) => {
    const target = event.target;

    // Only process textarea elements
    if (target.tagName === "TEXTAREA") {
      clearTimeout(debounceTimer); // Clear the previous timer

      // Set a new debounce timer
      debounceTimer = setTimeout(() => {
        const userInput = target.value.trim().toLowerCase();
        const match = getBestCourseMatch(userInput);

        console.log("User Input:", userInput);
        console.log("Match Found:", match);

        if (match) {
          // Update the input field with the best match
          target.value = match.name; // Replace input with the best match
          target.style.backgroundColor = ""; // Reset background color
          target.title = ""; // Clear tooltip
        } else {
          target.style.backgroundColor = "lightcoral"; // Highlight if no match
          target.title = "No matching course found."; // Add tooltip
        }
      }, 600); // Adjust debounce delay (in milliseconds) as needed
    }
  });
}

// Run the monitoring function when the page loads
window.addEventListener("DOMContentLoaded", monitorTableInputs);

// Export globally (optional, for debugging)
window.getBestCourseMatch = getBestCourseMatch;
