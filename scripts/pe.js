// pe.js – Handles Physical Education logic for planner

function fillPE() {
  const sportChoice = document.getElementById("playSport");
  if (!sportChoice) return [];

  const playsSport = sportChoice.value === "yes";
  const rows = document.querySelectorAll("#plannerBody tr");
  const triedCourses = [];

  // ENS 1–3 go in 9th grade
  const grade9 = rows[0].querySelectorAll("td");
  triedCourses.push("ENS 1");
  fillNextAvailableBox(grade9[0], "ENS 1"); // Tri 1
  triedCourses.push("ENS 2");
  fillNextAvailableBox(grade9[1], "ENS 2"); // Tri 2
  triedCourses.push("ENS 3");
  fillNextAvailableBox(grade9[2], "ENS 3"); // Tri 3

  if (!playsSport) {
    // Figure out which grade user chose for ENS 4
    const gradeSelect = document.getElementById("ens4Grade");
    let ens4Grade = parseInt(gradeSelect?.value || "10");
    const targetRow = rows[ens4Grade - 9].querySelectorAll("td");

    let filled = 0;
    for (let tri = 0; tri < 3 && filled < 2; tri++) {
      triedCourses.push("ENS 4");
      if (fillNextAvailableBox(targetRow[tri], "ENS 4")) {
        filled++;
      }
    }
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
