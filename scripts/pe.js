// pe.js – Handles Physical Education logic for planner

function fillPE() {
  const sportChoice = document.getElementById("playSport");
  if (!sportChoice) return;

  const playsSport = sportChoice.value === "yes";
  const rows = document.querySelectorAll("#plannerBody tr");

  // ENS 1–3 go in 9th grade
  const grade9 = rows[0].querySelectorAll("td");
  fillNextAvailableBox(grade9[0], "ENS 1"); // Tri 1
  fillNextAvailableBox(grade9[1], "ENS 2"); // Tri 2
  fillNextAvailableBox(grade9[2], "ENS 3"); // Tri 3

  if (!playsSport) {
    // ENS 4 if no sport
    const grade10 = rows[1].querySelectorAll("td");
    for (let tri = 0; tri < 3; tri++) {
      if (fillNextAvailableBox(grade10[tri], "ENS 4")) break;
    }
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
