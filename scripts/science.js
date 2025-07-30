// science.js – Handles science pathways

function fillSciencePathway() {
  const scienceOption = document.getElementById("scienceOption").value;
  const planner = document.querySelectorAll("#plannerBody tr");

  let courses = [];

  switch (scienceOption) {
    case "option1":
      courses = [
        "Biology of the Living Earth 1",
        "Biology of the Living Earth 2",
        "Chemistry in the Earth System 1",
        "AP Biology 3",
        "AP Biology 4",
        "AP Biology Seminar"
      ];
      break;
    case "option2":
      courses = [
        "Biology of the Living Earth 1",
        "Biology of the Living Earth 2",
        "Chemistry in the Earth System 1",
        "AP Chemistry 3",
        "AP Chemistry 4",
        "AP Chemistry Seminar"
      ];
      break;
    case "option3":
      courses = [
        "Biology of the Living Earth 1",
        "Chemistry in the Earth System 1",
        "Chemistry in the Earth System 2",
        "AP Biology 3",
        "AP Biology 4",
        "AP Biology Seminar"
      ];
      break;
    case "option4":
      courses = [
        "Biology of the Living Earth 1",
        "Chemistry in the Earth System 1",
        "Chemistry in the Earth System 2",
        "AP Chemistry 3",
        "AP Chemistry 4",
        "AP Chemistry Seminar"
      ];
      break;
    case "physics":
      courses = [
        "Biology of the Living Earth 1",
        "Biology of the Living Earth 2",
        "Physics of the Universe 1",
        "Physics of the Universe 2",
        "AP Physics C: Mechanics 1a",
        "AP Physics C: Mechanics 1b",
        "AP Physics C: Mechanics Seminar"
      ];
      break;
    case "environmental":
      courses = [
        "Biology of the Living Earth 1",
        "Biology of the Living Earth 2",
        "Chemistry in the Earth System 1",
        "Chemistry in the Earth System 2",
        "AP Environmental Science 1",
        "AP Environmental Science 2",
        "AP Environmental Science Seminar"
      ];
      break;
    default:
      alert("Please select a science pathway option.");
      return [];
  }

  let courseIndex = 0;
  const triedCourses = [...courses];

  // Place courses one by one in open boxes starting from 9th grade
  for (let grade = 0; grade < 4; grade++) {
    const tds = planner[grade].querySelectorAll("td");

    for (let tri = 0; tri < 3; tri++) {
      if (courseIndex >= courses.length) return triedCourses;

      const cell = tds[tri];
      const boxes = cell.querySelectorAll("textarea");

      for (let box of boxes) {
        if (box.value.trim() === "") {
          box.value = courses[courseIndex];
          courseIndex++;
          break; // go to next trimester
        }
      }
    }
  }
  return triedCourses;
}
