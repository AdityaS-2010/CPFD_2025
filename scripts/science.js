// science.js – Handles Science course planning

function fillSciencePathway() {
  const scienceOption = document.getElementById("scienceOption").value;
  const planner = document.querySelectorAll("#plannerBody tr");
  const triedCourses = [];

  if (scienceOption === "option1") {
    // Grade 9
    triedCourses.push("Biology of the Living Earth 1");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[0], "Biology of the Living Earth 1");
    triedCourses.push("Biology of the Living Earth 2");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[1], "Biology of the Living Earth 2");
    triedCourses.push("Chemistry in the Earth System 1");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[2], "Chemistry in the Earth System 1");
    // Grade 10
    triedCourses.push("AP Biology 3");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[0], "AP Biology 3");
    triedCourses.push("AP Biology 4");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[1], "AP Biology 4");
    triedCourses.push("AP Biology Seminar");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[2], "AP Biology Seminar");
  } else if (scienceOption === "option2") {
    // Grade 9
    triedCourses.push("Biology of the Living Earth 1");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[0], "Biology of the Living Earth 1");
    triedCourses.push("Biology of the Living Earth 2");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[1], "Biology of the Living Earth 2");
    triedCourses.push("Chemistry in the Earth System 1");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[2], "Chemistry in the Earth System 1");
    // Grade 10
    triedCourses.push("AP Chemistry 3");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[0], "AP Chemistry 3");
    triedCourses.push("AP Chemistry 4");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[1], "AP Chemistry 4");
    triedCourses.push("AP Chemistry Seminar");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[2], "AP Chemistry Seminar");
  } else if (scienceOption === "option3") {
    // Grade 9
    triedCourses.push("Biology of the Living Earth 1");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[0], "Biology of the Living Earth 1");
    triedCourses.push("Chemistry in the Earth System 1");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[1], "Chemistry in the Earth System 1");
    triedCourses.push("Chemistry in the Earth System 2");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[2], "Chemistry in the Earth System 2");
    // Grade 10
    triedCourses.push("AP Biology 3");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[0], "AP Biology 3");
    triedCourses.push("AP Biology 4");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[1], "AP Biology 4");
    triedCourses.push("AP Biology Seminar");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[2], "AP Biology Seminar");
  } else if (scienceOption === "option4") {
    // Grade 9
    triedCourses.push("Biology of the Living Earth 1");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[0], "Biology of the Living Earth 1");
    triedCourses.push("Chemistry in the Earth System 1");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[1], "Chemistry in the Earth System 1");
    triedCourses.push("Chemistry in the Earth System 2");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[2], "Chemistry in the Earth System 2");
    // Grade 10
    triedCourses.push("AP Chemistry 3");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[0], "AP Chemistry 3");
    triedCourses.push("AP Chemistry 4");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[1], "AP Chemistry 4");
    triedCourses.push("AP Chemistry Seminar");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[2], "AP Chemistry Seminar");
  } else if (scienceOption === "physics") {
    // Grade 9
    triedCourses.push("Biology of the Living Earth 1");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[0], "Biology of the Living Earth 1");
    triedCourses.push("Biology of the Living Earth 2");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[1], "Biology of the Living Earth 2");
    // Grade 10
    triedCourses.push("Physics of the Universe 1");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[0], "Physics of the Universe 1");
    triedCourses.push("Physics of the Universe 2");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[1], "Physics of the Universe 2");
    // Grade 11
    triedCourses.push("AP Physics C: Mechanics 1a");
    fillNextAvailableBox(planner[2].querySelectorAll("td")[0], "AP Physics C: Mechanics 1a");
    triedCourses.push("AP Physics C: Mechanics 1b");
    fillNextAvailableBox(planner[2].querySelectorAll("td")[1], "AP Physics C: Mechanics 1b");
    triedCourses.push("AP Physics C: Mechanics Seminar");
    fillNextAvailableBox(planner[2].querySelectorAll("td")[2], "AP Physics C: Mechanics Seminar");
  } else if (scienceOption === "environmental") {
    // Grade 9
    triedCourses.push("Biology of the Living Earth 1");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[0], "Biology of the Living Earth 1");
    triedCourses.push("Biology of the Living Earth 2");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[1], "Biology of the Living Earth 2");
    // Grade 10
    triedCourses.push("Chemistry in the Earth System 1");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[0], "Chemistry in the Earth System 1");
    triedCourses.push("Chemistry in the Earth System 2");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[1], "Chemistry in the Earth System 2");
    // Grade 11
    triedCourses.push("AP Environmental Science 1");
    fillNextAvailableBox(planner[2].querySelectorAll("td")[0], "AP Environmental Science 1");
    triedCourses.push("AP Environmental Science 2");
    fillNextAvailableBox(planner[2].querySelectorAll("td")[1], "AP Environmental Science 2");
    triedCourses.push("AP Environmental Science Seminar");
    fillNextAvailableBox(planner[2].querySelectorAll("td")[2], "AP Environmental Science Seminar");
  }
  return triedCourses;
}

// Utility function to fill next empty textarea in a cell
function fillNextAvailableBox(cell, text) {
  const boxes = cell.querySelectorAll("textarea");
  for (let box of boxes) {
    if (box.value.trim() === "") {
      box.value = text;
      return true;
    }
  }
  return false;
}
