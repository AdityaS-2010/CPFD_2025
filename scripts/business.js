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

  for (let course of businessElectives) {
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
}

function fillAllRequirements() {
  fillPE();
  fillMathPathway();
  fillEnglishPathway();
  fillSocialSciencePathway();
  fillSciencePathway();
  fillBusinessElectives();
  fillLanguage();
}

