function fillLanguage() {
  const outside = document.getElementById("outsideLanguage").value === "yes";
  const lang = document.getElementById("languageChoice").value;
  const startLevel = parseInt(document.getElementById("langStartLevel").value);
  const rows = document.querySelectorAll("#plannerBody tr");

  if (outside) return;

  let sequence = [];

  if (lang === "Spanish") {
    sequence = [
      "Spanish 1", "Spanish 2",
      "Spanish 3", "Spanish 4",
      "Spanish 5", "Spanish 6",
      "Spanish 7", "Spanish 8",
      "AP Spanish Language 1",
      "AP Spanish Language 2",
      "AP Spanish Language Seminar"
    ];
  } else if (lang === "Chinese") {
    sequence = [
      "Chinese 1", "Chinese 2",
      "Chinese 3", "Chinese 4",
      "Chinese 5", "Chinese 6",
      "Chinese 7", "Chinese 8",
      "Chinese 9",
      "AP Chinese Language 1",
      "AP Chinese Language 2",
      "AP Chinese Language Seminar"
    ];
  }

  let startIndex = (startLevel - 1);
  let classes = [];

  for (let i = 0; i < 4; i++) {
    let idx = startIndex + i;
    if (idx < sequence.length) {
      classes.push(sequence[idx]);
    } else {
      break; // stop if we hit the end
    }
  }

  let courseIndex = 0;
  for (let grade = 0; grade < 4; grade++) {
    const tds = rows[grade].querySelectorAll("td");
    for (let tri = 0; tri < 3; tri++) {
      const cell = tds[tri];
      const boxes = cell.querySelectorAll("textarea");
      for (let box of boxes) {
        if (box.value.trim() === "") {
          if (courseIndex < classes.length) {
            box.value = classes[courseIndex++];
          } else {
            return; // done placing courses
          }
          break;
        }
      }
      if (courseIndex >= classes.length) return;
    }
  }
}
