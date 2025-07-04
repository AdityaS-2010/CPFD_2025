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

    default:
      alert("Please select a science pathway option.");
      return;
  }

  let courseIndex = 0;

  // Fill courses one per trimester box, starting with grade 9
  for (let grade = 0; grade < 4; grade++) {
    const tds = planner[grade].querySelectorAll("td");

    for (let tri = 0; tri < 3; tri++) {
      if (courseIndex >= courses.length) return;

      const cell = tds[tri];
      const boxes = cell.querySelectorAll("textarea");

      for (let box of boxes) {
        if (box.value.trim() === "") {
          box.value = courses[courseIndex++];
          break;
        }
      }
    }
  }
}
