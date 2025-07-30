function extractDropdownSelections() {
  return {
    ctePathway: document.getElementById("ctePathway").value,
    mathStart: document.getElementById("mathStart").value,
    playSport: document.getElementById("playSport").value,
    ens4Grade: document.getElementById("ens4Grade").value,
    englishTrack: document.getElementById("englishTrack").value,
    outsideLanguage: document.getElementById("outsideLanguage").value,
    languageChoice: document.getElementById("languageChoice").value,
    langStartLevel: document.getElementById("langStartLevel").value,
    scienceOption: document.getElementById("scienceOption").value,
    socialScienceTrack: document.getElementById("socialScienceTrack").value,
    fineArtTrack: document.getElementById("fineArtTrack").value
  };
}

function extractPlannerData() {
  const plannerBody = document.getElementById("plannerBody");
  const rows = plannerBody.querySelectorAll("tr");
  const planner = {};

  rows.forEach(row => {
    const grade = row.querySelector("th").textContent.trim();
    const textareas = row.querySelectorAll("textarea");
    const trimesters = Array.from(textareas).map(area => area.value.trim());

    planner[grade] = {
      Trimester1: trimesters.slice(0, 5),
      Trimester2: trimesters.slice(5, 10),
      Trimester3: trimesters.slice(10, 15)
    };
  });

  return planner;
}

function compareCourses(selectedCourses, planner) {
  const missingCourses = [];
  // Flatten all planner courses into a single array for easy lookup
  const plannerCourses = [];
  Object.values(planner).forEach(gradeData => {
    Object.values(gradeData).forEach(trimesterArr => {
      trimesterArr.forEach(course => {
        if (course && course.trim() !== "") plannerCourses.push(course.trim());
      });
    });
  });

  // Debug logs
  console.log("Selected Courses:", selectedCourses);
  console.log("Planner Courses:", plannerCourses);

  Object.keys(selectedCourses).forEach(category => {
    const courses = selectedCourses[category];
    courses.forEach(course => {
      if (!plannerCourses.includes(course)) {
        missingCourses.push(course);
      }
    });
  });

  // For your use case, overriddenCourses is the same as missingCourses
  // (since if a course couldn't be placed, it's missing)
  return { 
    missingCourses, 
    overriddenCourses: missingCourses 
  };
}

function sendPlannerToAPI(dropdownSelections, planner, missingCourses, overriddenCourses) {
  const requestData = {
    dropdownSelections,
    planner,
    missingCourses,
    overriddenCourses
  };

  // Log the data instead of sending it to the API
  console.log("Data to be sent to API:", JSON.stringify(requestData, null, 2));

  // Simulate an API response for testing
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Simulated API response received.");
      resolve(planner); // Return the same planner for now
    }, 1000);
  });
}

function updatePlanner(optimizedPlanner) {
  const plannerBody = document.getElementById("plannerBody");

  Object.keys(optimizedPlanner).forEach(grade => {
    // Find the row for this grade
    const rows = plannerBody.querySelectorAll("tr");
    let row = null;
    rows.forEach(r => {
      const th = r.querySelector("th");
      if (th && th.textContent.trim() === grade) {
        row = r;
      }
    });
    if (!row) return; // Skip if not found

    const textareas = row.querySelectorAll("textarea");
    const optimizedTrimesterData = [
      ...optimizedPlanner[grade].Trimester1,
      ...optimizedPlanner[grade].Trimester2,
      ...optimizedPlanner[grade].Trimester3
    ];

    textareas.forEach((textarea, index) => {
      textarea.value = optimizedTrimesterData[index] || ""; // Update textarea values
    });
  });
}

export { extractDropdownSelections, extractPlannerData, compareCourses, sendPlannerToAPI, updatePlanner };
