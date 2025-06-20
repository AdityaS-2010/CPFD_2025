// business.js — Logic specific to Business, Finance & Marketing pathway

const businessElectives = [
  "Marketing Economics 1",
  "Marketing Economics 2",
  "Business Law 1",
  "Business Law 2",
  "Introduction to Finance 1",
  "Introduction to Finance 2"
];
function resetPlanner() {
  const textareas = document.querySelectorAll('#plannerBody textarea');
  textareas.forEach(area => area.value = '');
}

function fillBusinessElectives() {
  const table = document.getElementById("plannerBody");
  const sequenceMap = {
    "Marketing Economics 1": [{ grade: 9, trimester: 1 }],
    "Marketing Economics 2": [{ grade: 9, trimester: 2 }],
    "Business Law 1": [{ grade: 10, trimester: 1 }],
    "Business Law 2": [{ grade: 10, trimester: 2 }],
    "Introduction to Finance 1": [{ grade: 11, trimester: 1 }],
    "Introduction to Finance 2": [{ grade: 11, trimester: 2 }]
  };

  for (let course of businessElectives) {
    const placement = sequenceMap[course][0];
    const rowIndex = placement.grade - 9;
    const cell = table.rows[rowIndex].cells[placement.trimester];
    const textareas = cell.querySelectorAll("textarea");
    for (let ta of textareas) {
      if (ta.value.trim() === "") {
        ta.value = course;
        break;
      }
    }
  }
}
