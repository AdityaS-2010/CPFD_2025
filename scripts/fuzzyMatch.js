// === Fuzzy Matching with Fuse.js ===
// Assumes Fuse.js is loaded globally via a <script> tag in HTML
// Assumes courseCatalog is globally available (from catalog.js)

const fuse = new Fuse(courseCatalog, {
  keys: ['name'],
  threshold: 0.5,             
  includeScore: true,
  ignoreLocation: true,       
  minMatchCharLength: 2       
});


// Helper to clean input
function cleanInput(str) {
  return str.trim().toLowerCase();
}

function getCourseSequence(baseName) {
  const prefixWords = baseName.toLowerCase().split(" ").slice(0, 2).join(" "); // Use first two words as prefix
  const relatedCourses = courseCatalog.filter(c => c.name.toLowerCase().startsWith(prefixWords)); // Build list based on prefix
  const sequenceSet = new Set();

  // Step 1: Add all related courses to the sequence set
  relatedCourses.forEach(course => sequenceSet.add(course.name));

  // Step 2: Traverse prerequisites up and down
  let addedNew;
  do {
    addedNew = false;
    courseCatalog.forEach(course => {
      const hasMatch = (course.prerequisites || []).some(pr => sequenceSet.has(pr));
      if (hasMatch && !sequenceSet.has(course.name) && course.name.toLowerCase().startsWith(prefixWords)) {
        sequenceSet.add(course.name); // Add relevant descendants
        addedNew = true;
      }
    });
  } while (addedNew);

  // Step 3: Sort courses by prerequisites
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

  // Log the sequence for debugging
  console.log(`Sequence for "${baseName}":`, sorted);

  return sorted;
}


// Main matching function
function getBestCourseMatch(input) {
  const cleaned = cleanInput(input);
  if (!cleaned) return null;

  // Build the sequence based on the prefix
  const sequence = getCourseSequence(cleaned);

  // Get all courses currently in the planner
  const currentCourses = getAllCoursesInPlanner();

  // Find the next course in the sequence that is not already in the planner
  const remainingSequence = sequence.filter(courseName => !currentCourses.includes(courseName));

  if (remainingSequence.length > 0) {
    const nextName = remainingSequence[0];
    return courseCatalog.find(c => c.name === nextName) || null;
  }

  return null; // No matching course found
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
