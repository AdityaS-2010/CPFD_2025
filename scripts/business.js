// Import the necessary functions from plannerExtractor.js
import { extractDropdownSelections, extractPlannerData, compareCourses, sendPlannerToAPI, updatePlanner } from './plannerExtractor.js';

function placeElectiveSequence(sequence, allowedGrades) {
  const table = document.getElementById("plannerBody");
  let placedCourses = [];
  for (let gradeIdx = 0; gradeIdx < allowedGrades.length; gradeIdx++) {
    const grade = allowedGrades[gradeIdx];
    const rowIndex = grade - 9;
    let cells = table.rows[rowIndex].cells;
    let placed = 0;

    // Try to place each course in the first available box in any trimester
    for (let seqIdx = 0; seqIdx < sequence.length; seqIdx++) {
      let filled = false;
      for (let t = 0; t < 3; t++) {
        if (fillNextAvailableBox(cells[t], sequence[seqIdx])) {
          placedCourses.push(sequence[seqIdx]);
          filled = true;
          break;
        }
      }
      if (!filled) break; // If can't place, stop trying in this grade
    }
    // If all courses placed, break out of allowedGrades loop
    if (placedCourses.length === sequence.length) break;
    else placedCourses = []; // Reset if not all placed in this grade
  }
  return placedCourses;
}

function fillBusinessElectives() {
  const planner = document.querySelectorAll("#plannerBody tr");
  const triedCourses = [];

  // 9th Grade
  if (fillNextAvailableBox(planner[0].querySelectorAll('td')[0], "Marketing Economics 1")) {
    triedCourses.push("Marketing Economics 1");
  }
  if (fillNextAvailableBox(planner[0].querySelectorAll('td')[1], "Marketing Economics 2")) {
    triedCourses.push("Marketing Economics 2");
  }

  // 10th Grade
  if (fillNextAvailableBox(planner[1].querySelectorAll('td')[0], "Business Law 1")) {
    triedCourses.push("Business Law 1");
  }
  if (fillNextAvailableBox(planner[1].querySelectorAll('td')[1], "Business Law 2")) {
    triedCourses.push("Business Law 2");
  }

  // 11th Grade
  if (fillNextAvailableBox(planner[2].querySelectorAll('td')[0], "Introduction to Finance 1")) {
    triedCourses.push("Introduction to Finance 1");
  }
  if (fillNextAvailableBox(planner[2].querySelectorAll('td')[1], "Introduction to Finance 2")) {
    triedCourses.push("Introduction to Finance 2");
  }

  // Optionally, repeat for 12th grade if needed

  return triedCourses;
}

function fillEngineeringElectives() {
  const planner = document.querySelectorAll("#plannerBody tr");
  const triedCourses = [];

  // 9th Grade
  if (fillNextAvailableBox(planner[0].querySelectorAll('td')[0], "Introduction to Engineering Design 1")) {
    triedCourses.push("Introduction to Engineering Design 1");
  }
  if (fillNextAvailableBox(planner[0].querySelectorAll('td')[1], "Introduction to Engineering Design 2")) {
    triedCourses.push("Introduction to Engineering Design 2");
  }

  // 10th Grade
  if (fillNextAvailableBox(planner[1].querySelectorAll('td')[0], "Robotics 1")) {
    triedCourses.push("Robotics 1");
  }
  if (fillNextAvailableBox(planner[1].querySelectorAll('td')[1], "Robotics 2")) {
    triedCourses.push("Robotics 2");
  }

  // 11th Grade
  if (fillNextAvailableBox(planner[2].querySelectorAll('td')[0], "Honors Principles of Engineering 1")) {
    triedCourses.push("Honors Principles of Engineering 1");
  }
  if (fillNextAvailableBox(planner[2].querySelectorAll('td')[1], "Honors Principles of Engineering 2")) {
    triedCourses.push("Honors Principles of Engineering 2");
  }

  // Optionally, repeat for 12th grade if needed

  return triedCourses;
}

function fillBiomedElectives() {
  const planner = document.querySelectorAll("#plannerBody tr");
  const triedCourses = [];

  // 9th Grade
  if (fillNextAvailableBox(planner[0].querySelectorAll('td')[0], "Principles of Biomedical Sciences 1")) {
    triedCourses.push("Principles of Biomedical Sciences 1");
  }
  if (fillNextAvailableBox(planner[0].querySelectorAll('td')[1], "Principles of Biomedical Sciences 2")) {
    triedCourses.push("Principles of Biomedical Sciences 2");
  }

  // 10th Grade
  if (fillNextAvailableBox(planner[1].querySelectorAll('td')[0], "Human Body Systems 1")) {
    triedCourses.push("Human Body Systems 1");
  }
  if (fillNextAvailableBox(planner[1].querySelectorAll('td')[1], "Human Body Systems 2")) {
    triedCourses.push("Human Body Systems 2");
  }

  // 11th Grade
  if (fillNextAvailableBox(planner[2].querySelectorAll('td')[0], "Honors Medical Interventions 1")) {
    triedCourses.push("Honors Medical Interventions 1");
  }
  if (fillNextAvailableBox(planner[2].querySelectorAll('td')[1], "Honors Medical Interventions 2")) {
    triedCourses.push("Honors Medical Interventions 2");
  }

  // Optionally, repeat for 12th grade if needed

  return triedCourses;
}

function fillICTElectives() {
  const planner = document.querySelectorAll("#plannerBody tr");
  const triedCourses = [];

  // 9th Grade
  if (fillNextAvailableBox(planner[0].querySelectorAll('td')[0], "Computer Science and Software Engineering 1")) {
    triedCourses.push("Computer Science and Software Engineering 1");
  }
  if (fillNextAvailableBox(planner[0].querySelectorAll('td')[1], "Computer Science and Software Engineering 2")) {
    triedCourses.push("Computer Science and Software Engineering 2");
  }

  // 10th Grade
  if (fillNextAvailableBox(planner[1].querySelectorAll('td')[0], "AP Computer Science Principles 1")) {
    triedCourses.push("AP Computer Science Principles 1");
  }
  if (fillNextAvailableBox(planner[1].querySelectorAll('td')[1], "AP Computer Science Principles 2")) {
    triedCourses.push("AP Computer Science Principles 2");
  }
  if (fillNextAvailableBox(planner[1].querySelectorAll('td')[2], "Data Structures 1")) {
    triedCourses.push("Data Structures 1");
  }

  // 11th Grade
  if (fillNextAvailableBox(planner[2].querySelectorAll('td')[0], "AP Computer Science A 1")) {
    triedCourses.push("AP Computer Science A 1");
  }
  if (fillNextAvailableBox(planner[2].querySelectorAll('td')[1], "AP Computer Science A 2")) {
    triedCourses.push("AP Computer Science A 2");
  }
  if (fillNextAvailableBox(planner[2].querySelectorAll('td')[2], "Data Structures 2")) {
    triedCourses.push("Data Structures 2");
  }

  // Optionally, repeat for 12th grade if needed

  return triedCourses;
}

function fillEducationElectives() {
  const planner = document.querySelectorAll("#plannerBody tr");
  const triedCourses = [];

  // 9th Grade
  if (fillNextAvailableBox(planner[0].querySelectorAll('td')[0], "Child Development and Psychology 1")) {
    triedCourses.push("Child Development and Psychology 1");
  }
  if (fillNextAvailableBox(planner[0].querySelectorAll('td')[1], "Child Development and Psychology 2")) {
    triedCourses.push("Child Development and Psychology 2");
  }

  // 10th Grade
  if (fillNextAvailableBox(planner[1].querySelectorAll('td')[0], "Child Development and Psychology 3")) {
    triedCourses.push("Child Development and Psychology 3");
  }
  if (fillNextAvailableBox(planner[1].querySelectorAll('td')[1], "Child Development and Psychology 4")) {
    triedCourses.push("Child Development and Psychology 4");
  }

  // Optionally, repeat for 11th/12th grade if needed

  return triedCourses;
}

// Updated fillAllRequirements function
function fillAllRequirements() {
  const peCourses = fillPE(); // ENS 1–3 only
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
  const ens4Courses = fillENS4();
  const languageCourses = fillLanguage();
  const fineArtCourses = fillFineArt();




  // Extract dropdown selections and planner data
  const dropdownSelections = extractDropdownSelections();
  const planner = extractPlannerData();

  // Use the actual placed courses
  const selectedCourses = {
    peCourses: [...peCourses, ...ens4Courses],
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
  //sendPlannerToAPI(dropdownSelections, planner, missingCourses, overriddenCourses)
  //  .then(optimizedPlanner => {
  //    updatePlanner(optimizedPlanner);
  //  });

  // Run validations after auto-filling
  runGraduationValidation();
  runUCValidation();
}

// Expose the function globally
window.fillAllRequirements = fillAllRequirements;








