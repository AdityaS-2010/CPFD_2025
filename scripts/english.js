// english.js – Handles English course planning

function fillEnglishPathway() {
  const englishStart = document.getElementById("englishTrack").value; // "normal" or "advanced"
  const planner = document.querySelectorAll("#plannerBody tr");

  if (englishStart === "normal") {
    // Grade 9
    fillNextAvailableBox(planner[0].querySelectorAll("td")[0], "High School English 1");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[2], "High School English 2");
    // Grade 10
    fillNextAvailableBox(planner[1].querySelectorAll("td")[0], "High School English 3");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[2], "High School English 4");
    // Grade 11
    fillNextAvailableBox(planner[2].querySelectorAll("td")[0], "American Literature 1");
    fillNextAvailableBox(planner[2].querySelectorAll("td")[2], "American Literature 2");
    // Grade 12
    fillNextAvailableBox(planner[3].querySelectorAll("td")[0], "World Literature 1");
    fillNextAvailableBox(planner[3].querySelectorAll("td")[2], "World Literature 2");
  } else if (englishStart === "advanced") {
    // Grade 9
    fillNextAvailableBox(planner[0].querySelectorAll("td")[0], "Honors High School English 1");
    fillNextAvailableBox(planner[0].querySelectorAll("td")[2], "Honors High School English 2");
    // Grade 10
    fillNextAvailableBox(planner[1].querySelectorAll("td")[0], "Honors Humanities 1");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[2], "Honors Humanities 2");
    // Grade 11: AP English Language fills all three trimesters
    const grade11Tds = planner[2].querySelectorAll("td");
    fillNextAvailableBox(grade11Tds[0], "AP English Language 1");
    fillNextAvailableBox(grade11Tds[1], "AP English Language 2");
    fillNextAvailableBox(grade11Tds[2], "AP English Language Seminar");
    // Grade 12: AP English Literature fills all three trimesters
    const grade12Tds = planner[3].querySelectorAll("td");
    fillNextAvailableBox(grade12Tds[0], "AP English Literature 1");
    fillNextAvailableBox(grade12Tds[1], "AP English Literature 2");
    fillNextAvailableBox(grade12Tds[2], "AP English Literature Seminar");
  }
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
