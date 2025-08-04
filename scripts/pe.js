// pe.js – Handles Physical Education logic for planner

function fillPE() {
  const sportChoice = document.getElementById("playSport");
  if (!sportChoice) return [];

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

  return triedCourses;
}

// Flexible ENS 4 placement, called after other requirements
function fillENS4() {
  const sportChoice = document.getElementById("playSport");
  if (!sportChoice || sportChoice.value === "yes") return []; // Don't place ENS 4 if playing a sport

  const gradeSelect = document.getElementById("ens4Grade");
  let ens4Grade = parseInt(gradeSelect?.value || "10");
  const rows = document.querySelectorAll("#plannerBody tr");

  for (let gradeOffset = 0; gradeOffset < rows.length - (ens4Grade - 9); gradeOffset++) {
    const targetRow = rows[ens4Grade - 9 + gradeOffset].querySelectorAll("td");
    let placedBoxes = [];
    let placed = 0;
    for (let tri = 0; tri < 3 && placed < 2; tri++) {
      const cell = targetRow[tri];
      const boxes = cell.querySelectorAll("textarea");
      for (const box of boxes) {
        if (box.value.trim() === "") {
          box.value = "ENS 4";
          placedBoxes.push(box);
          placed++;
          break; // Move to next trimester after placing one ENS 4
        }
      }
    }
    if (placed === 2) {
      // Both ENS 4 classes placed in this grade
      return ["ENS 4", "ENS 4"];
    } else {
      // Remove any partial ENS 4 placements before trying next grade
      for (const box of placedBoxes) {
        box.value = "";
      }
    }
    // If not enough space, continue to next grade
  }

  return [];
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
