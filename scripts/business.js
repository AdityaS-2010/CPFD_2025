// Import the necessary functions from plannerExtractor.js
import { extractDropdownSelections, extractPlannerData, compareCourses, sendPlannerToAPI, updatePlanner } from './plannerExtractor.js';

function fillBusinessElectives() {
  const table = document.getElementById("plannerBody");
  const businessElectives = [
    "Marketing Economics 1",
    "Marketing Economics 2",
    "Business Law 1",
    "Business Law 2",
    "Introduction to Finance 1",
    "Introduction to Finance 2"
  ];
  const sequenceMap = {
    "Marketing Economics 1": { grade: 9, trimester: 1 },
    "Marketing Economics 2": { grade: 9, trimester: 3 },
    "Business Law 1": { grade: 10, trimester: 1 },
    "Business Law 2": { grade: 10, trimester: 3 },
    "Introduction to Finance 1": { grade: 11, trimester: 1 },
    "Introduction to Finance 2": { grade: 11, trimester: 3 }
  };
  const triedCourses = [];
  for (let course of businessElectives) {
    triedCourses.push(course);
    const pref = sequenceMap[course];
    const rowIndex = pref.grade - 9;
    let placed = false;
    // Preferred cell first
    const cell = table.rows[rowIndex].cells[pref.trimester];
    placed = fillNextAvailableBox(cell, course);
    // Try other trimesters same grade
    if (!placed) {
      for (let t = 0; t < 3; t++) {
        if (t === pref.trimester) continue;
        const otherCell = table.rows[rowIndex].cells[t];
        if (fillNextAvailableBox(otherCell, course)) {
          placed = true;
          break;
        }
      }
    }
    // Try other grades
    if (!placed) {
      for (let g = rowIndex + 1; g < 4; g++) {
        for (let t = 0; t < 3; t++) {
          const fallbackCell = table.rows[g].cells[t];
          if (fillNextAvailableBox(fallbackCell, course)) {
            placed = true;
            break;
          }
        }
        if (placed) break;
      }
    }
  }
  return triedCourses;
}

function fillEngineeringElectives() {
  const table = document.getElementById("plannerBody");
  const engineeringElectives = [
    "Introduction to Engineering Design 1",
    "Introduction to Engineering Design 2",
    "Robotics 1",
    "Robotics 2",
    "Honors Principles of Engineering 1",
    "Honors Principles of Engineering 2"
  ];
  const sequenceMap = {
    "Introduction to Engineering Design 1": { grade: 9, trimester: 1 },
    "Introduction to Engineering Design 2": { grade: 9, trimester: 3 },
    "Robotics 1": { grade: 10, trimester: 1 },
    "Robotics 2": { grade: 10, trimester: 3 },
    "Honors Principles of Engineering 1": { grade: 11, trimester: 1 },
    "Honors Principles of Engineering 2": { grade: 11, trimester: 3 }
  };
  const triedCourses = [];
  for (let course of engineeringElectives) {
    triedCourses.push(course);
    const pref = sequenceMap[course];
    const rowIndex = pref.grade - 9;
    let placed = false;
    // Preferred cell first
    const cell = table.rows[rowIndex].cells[pref.trimester];
    placed = fillNextAvailableBox(cell, course);
    // Try other trimesters in same grade
    if (!placed) {
      for (let t = 0; t < 3; t++) {
        if (t === pref.trimester) continue;
        const otherCell = table.rows[rowIndex].cells[t];
        if (fillNextAvailableBox(otherCell, course)) {
          placed = true;
          break;
        }
      }
    }
    // Try lower grades
    if (!placed) {
      for (let g = rowIndex + 1; g < 4; g++) {
        for (let t = 0; t < 3; t++) {
          const fallbackCell = table.rows[g].cells[t];
          if (fillNextAvailableBox(fallbackCell, course)) {
            placed = true;
            break;
          }
        }
        if (placed) break;
      }
    }
  }
  return triedCourses;
}

function fillBiomedElectives() {
  const table = document.getElementById("plannerBody");
  const biomedElectives = [
    "Principles of Biomedical Sciences 1",
    "Principles of Biomedical Sciences 2",
    "Human Body Systems 1",
    "Human Body Systems 2",
    "Honors Medical Interventions 1",
    "Honors Medical Interventions 2"
  ];
  const sequenceMap = {
    "Principles of Biomedical Sciences 1": { grade: 9, trimester: 1 },
    "Principles of Biomedical Sciences 2": { grade: 9, trimester: 3 },
    "Human Body Systems 1": { grade: 10, trimester: 1 },
    "Human Body Systems 2": { grade: 10, trimester: 3 },
    "Honors Medical Interventions 1": { grade: 11, trimester: 1 },
    "Honors Medical Interventions 2": { grade: 11, trimester: 3 }
  };
  const triedCourses = [];
  for (let course of biomedElectives) {
    triedCourses.push(course);
    const pref = sequenceMap[course];
    const rowIndex = pref.grade - 9;
    let placed = false;
    // Preferred cell first
    const cell = table.rows[rowIndex].cells[pref.trimester];
    placed = fillNextAvailableBox(cell, course);
    // Try other trimesters same grade
    if (!placed) {
      for (let t = 0; t < 3; t++) {
        if (t === pref.trimester) continue;
        const otherCell = table.rows[rowIndex].cells[t];
        if (fillNextAvailableBox(otherCell, course)) {
          placed = true;
          break;
        }
      }
    }
    // Try later grades
    if (!placed) {
      for (let g = rowIndex + 1; g < 4; g++) {
        for (let t = 0; t < 3; t++) {
          const fallbackCell = table.rows[g].cells[t];
          if (fillNextAvailableBox(fallbackCell, course)) {
            placed = true;
            break;
          }
        }
        if (placed) break;
      }
    }
  }
  return triedCourses;
}

function fillICTElectives() {
  const table = document.getElementById("plannerBody");
  const ictElectives = [
    "Computer Science and Software Engineering 1",
    "Computer Science and Software Engineering 2",
    "AP Computer Science Principles 1",
    "AP Computer Science Principles 2",
    "Data Structures 1",
    "AP Computer Science A 1",
    "AP Computer Science A 2",
    "Data Structures 2"
  ];
  const sequenceMap = {
    "Computer Science and Software Engineering 1": { grade: 9, trimester: 1 },
    "Computer Science and Software Engineering 2": { grade: 9, trimester: 2 },
    "AP Computer Science Principles 1": { grade: 10, trimester: 1 },
    "AP Computer Science Principles 2": { grade: 10, trimester: 2 },
    "Data Structures 1": { grade: 10, trimester: 3 },
    "AP Computer Science A 1": { grade: 11, trimester: 1 },
    "AP Computer Science A 2": { grade: 11, trimester: 2 },
    "Data Structures 2": { grade: 11, trimester: 3 }
  };
  const triedCourses = [];
  for (let course of ictElectives) {
    triedCourses.push(course);
    const pref = sequenceMap[course];
    const rowIndex = pref.grade - 9;
    let placed = false;
    // Preferred cell first
    const cell = table.rows[rowIndex].cells[pref.trimester];
    placed = fillNextAvailableBox(cell, course);
    // Try other trimesters in same grade
    if (!placed) {
      for (let t = 0; t < 3; t++) {
        if (t === pref.trimester) continue;
        const otherCell = table.rows[rowIndex].cells[t];
        if (fillNextAvailableBox(otherCell, course)) {
          placed = true;
          break;
        }
      }
    }
    // Try lower grades
    if (!placed) {
      for (let g = rowIndex + 1; g < 4; g++) {
        for (let t = 0; t < 3; t++) {
          const fallbackCell = table.rows[g].cells[t];
          if (fillNextAvailableBox(fallbackCell, course)) {
            placed = true;
            break;
          }
        }
        if (placed) break;
      }
    }
  }
  return triedCourses;
}

function fillEducationElectives() {
  const table = document.getElementById("plannerBody");
  const educationElectives = [
    "Child Development and Psychology 1",
    "Child Development and Psychology 2",
    "Child Development and Psychology 3",
    "Child Development and Psychology 4"
  ];
  const sequenceMap = {
    "Child Development and Psychology 1": { grade: 9, trimester: 1 },
    "Child Development and Psychology 2": { grade: 9, trimester: 3 },
    "Child Development and Psychology 3": { grade: 10, trimester: 1 },
    "Child Development and Psychology 4": { grade: 10, trimester: 3 }
  };
  const triedCourses = [];
  for (let course of educationElectives) {
    triedCourses.push(course);
    const pref = sequenceMap[course];
    const rowIndex = pref.grade - 9;
    let placed = false;
    // Preferred cell first
    const cell = table.rows[rowIndex].cells[pref.trimester];
    placed = fillNextAvailableBox(cell, course);
    // Try other trimesters same grade
    if (!placed) {
      for (let t = 0; t < 3; t++) {
        if (t === pref.trimester) continue;
        const otherCell = table.rows[rowIndex].cells[t];
        if (fillNextAvailableBox(otherCell, course)) {
          placed = true;
          break;
        }
      }
    }
    // Try later grades
    if (!placed) {
      for (let g = rowIndex + 1; g < 4; g++) {
        for (let t = 0; t < 3; t++) {
          const fallbackCell = table.rows[g].cells[t];
          if (fillNextAvailableBox(fallbackCell, course)) {
            placed = true;
            break;
          }
        }
        if (placed) break;
      }
    }
  }
  return triedCourses;
}

// Updated fillAllRequirements function
function fillAllRequirements() {
  const peCourses = fillPE();
  const mathCourses = fillMathPathway();
  const englishCourses = fillEnglishPathway();
  const scienceCourses = fillSciencePathway();

  const cteOption = document.getElementById("ctePathway").value;
  let ctePathwayCourses = [];
  switch (cteOption) {
    case "business":
      ctePathwayCourses = fillBusinessElectives();
      break;
    case "engineering":
      ctePathwayCourses = fillEngineeringElectives();
      break;
    case "biomed":
      ctePathwayCourses = fillBiomedElectives();
      break;
    case "ict":
      ctePathwayCourses = fillICTElectives();
      break;
    case "education":
      ctePathwayCourses = fillEducationElectives();
      break;
  }
  const socialScienceCourses = fillSocialSciencePathway();
  const languageCourses = fillLanguage();
  const fineArtCourses = fillFineArt();

  // Extract dropdown selections and planner data
  const dropdownSelections = extractDropdownSelections();
  const planner = extractPlannerData();

  // Use the actual placed courses
  const selectedCourses = {
    peCourses,
    mathCourses,
    englishCourses,
    scienceCourses,
    ctePathwayCourses,
    socialScienceCourses,
    languageCourses,
    fineArtCourses
  };

  // Compare selected courses with planner data
  const { missingCourses, overriddenCourses } = compareCourses(selectedCourses, planner);

  // Send data to API and update planner with the response
  sendPlannerToAPI(dropdownSelections, planner, missingCourses, overriddenCourses)
    .then(optimizedPlanner => {
      updatePlanner(optimizedPlanner);
    });

  // Run validations after auto-filling
  runGraduationValidation();
  runUCValidation();
}

// Expose the function globally
window.fillAllRequirements = fillAllRequirements;








