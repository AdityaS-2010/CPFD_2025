// math.js – Handles auto-filling math pathways based on user selection

function fillMathPathway() {
  const mathStart = document.getElementById('mathStart').value;
  const planner = document.querySelectorAll('#plannerBody tr');
  const triedCourses = [];

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

  if (mathStart === 'Math Accel') {
    // 9th Grade
    fillNextAvailableBox(planner[0].querySelectorAll('td')[0], 'Math Accel 1');
    triedCourses.push('Math Accel 1');
    fillNextAvailableBox(planner[0].querySelectorAll('td')[1], 'Integrated Math 1a');
    triedCourses.push('Integrated Math 1a');
    fillNextAvailableBox(planner[0].querySelectorAll('td')[2], 'Integrated Math 1b');
    triedCourses.push('Integrated Math 1b');
    // 10th Grade
    fillNextAvailableBox(planner[1].querySelectorAll('td')[0], 'Integrated Math 2a');
    triedCourses.push('Integrated Math 2a');
    fillNextAvailableBox(planner[1].querySelectorAll('td')[1], 'Integrated Math 2b');
    triedCourses.push('Integrated Math 2b');
    fillNextAvailableBox(planner[1].querySelectorAll('td')[2], 'Trigonometry');
    triedCourses.push('Trigonometry');
    // 11th Grade
    fillNextAvailableBox(planner[2].querySelectorAll('td')[0], 'Integrated Math 3a');
    triedCourses.push('Integrated Math 3a');
    fillNextAvailableBox(planner[2].querySelectorAll('td')[1], 'Integrated Math 3b');
    triedCourses.push('Integrated Math 3b');
    fillNextAvailableBox(planner[2].querySelectorAll('td')[2], 'Pre-Calc 1');
    triedCourses.push('Pre-Calc 1');
    // 12th Grade
    fillNextAvailableBox(planner[3].querySelectorAll('td')[0], 'AP Calculus AB 1');
    triedCourses.push('AP Calculus AB 1');
    fillNextAvailableBox(planner[3].querySelectorAll('td')[1], 'AP Calculus AB 2');
    triedCourses.push('AP Calculus AB 2');
    fillNextAvailableBox(planner[3].querySelectorAll('td')[2], 'Pre-Calc 2');
    triedCourses.push('Pre-Calc 2');
  }

  else if (mathStart === 'Integrated Math 1a') {
    // 9th Grade
    fillNextAvailableBox(planner[0].querySelectorAll('td')[0], 'Integrated Math 1a');
    triedCourses.push('Integrated Math 1a');
    fillNextAvailableBox(planner[0].querySelectorAll('td')[1], 'Integrated Math 1b');
    triedCourses.push('Integrated Math 1b');
    fillNextAvailableBox(planner[0].querySelectorAll('td')[2], 'Integrated Math 2a');
    triedCourses.push('Integrated Math 2a');
    // 10th Grade
    fillNextAvailableBox(planner[1].querySelectorAll('td')[0], 'Integrated Math 2b');
    triedCourses.push('Integrated Math 2b');
    fillNextAvailableBox(planner[1].querySelectorAll('td')[1], 'Integrated Math 3a');
    triedCourses.push('Integrated Math 3a');
    // Special: 3b & Pre-Calc 1 in 10th grade, trimester 3
    fillNextAvailableBox(planner[1].querySelectorAll('td')[2], 'Integrated Math 3b');
    triedCourses.push('Integrated Math 3b');
    fillNextAvailableBox(planner[1].querySelectorAll('td')[2], 'Pre-Calc 1');
    triedCourses.push('Pre-Calc 1');
    // 11th Grade
    fillNextAvailableBox(planner[2].querySelectorAll('td')[0], 'AP Calculus AB 1');
    triedCourses.push('AP Calculus AB 1');
    fillNextAvailableBox(planner[2].querySelectorAll('td')[1], 'AP Calculus AB 2');
    triedCourses.push('AP Calculus AB 2');
    fillNextAvailableBox(planner[2].querySelectorAll('td')[2], 'Pre-Calc 2');
    triedCourses.push('Pre-Calc 2');
    // 12th Grade
    fillNextAvailableBox(planner[3].querySelectorAll('td')[0], 'Bridge to AP Calculus BC');
    triedCourses.push('Bridge to AP Calculus BC');
    fillNextAvailableBox(planner[3].querySelectorAll('td')[1], 'AP Calculus BC 1');
    triedCourses.push('AP Calculus BC 1');
  }

  else if (mathStart === 'Integrated Math 2a') {
    // 9th Grade
    fillNextAvailableBox(planner[0].querySelectorAll('td')[0], 'Integrated Math 2a');
    triedCourses.push('Integrated Math 2a');
    fillNextAvailableBox(planner[0].querySelectorAll('td')[1], 'Integrated Math 2b');
    triedCourses.push('Integrated Math 2b');
    fillNextAvailableBox(planner[0].querySelectorAll('td')[2], 'Trigonometry');
    triedCourses.push('Trigonometry');
    // 10th Grade
    fillNextAvailableBox(planner[1].querySelectorAll('td')[0], 'Integrated Math 3a');
    triedCourses.push('Integrated Math 3a');
    fillNextAvailableBox(planner[1].querySelectorAll('td')[1], 'Integrated Math 3b');
    triedCourses.push('Integrated Math 3b');
    fillNextAvailableBox(planner[1].querySelectorAll('td')[2], 'Pre-Calc 1');
    triedCourses.push('Pre-Calc 1');
    // 11th Grade
    fillNextAvailableBox(planner[2].querySelectorAll('td')[0], 'AP Calculus AB 1');
    triedCourses.push('AP Calculus AB 1');
    fillNextAvailableBox(planner[2].querySelectorAll('td')[1], 'AP Calculus AB 2');
    triedCourses.push('AP Calculus AB 2');
    fillNextAvailableBox(planner[2].querySelectorAll('td')[2], 'Pre-Calc 2');
    triedCourses.push('Pre-Calc 2');
    // 12th Grade
    fillNextAvailableBox(planner[3].querySelectorAll('td')[0], 'Bridge to AP Calculus BC');
    triedCourses.push('Bridge to AP Calculus BC');
    fillNextAvailableBox(planner[3].querySelectorAll('td')[1], 'AP Calculus BC 1');
    triedCourses.push('AP Calculus BC 1');
    fillNextAvailableBox(planner[3].querySelectorAll('td')[2], 'AP Calculus BC 2');
    triedCourses.push('AP Calculus BC 2');
  }

  else if (mathStart === 'Integrated Math 2b') {
    // 9th Grade
    fillNextAvailableBox(planner[0].querySelectorAll('td')[0], 'Integrated Math 2b');
    triedCourses.push('Integrated Math 2b');
    fillNextAvailableBox(planner[0].querySelectorAll('td')[1], 'Integrated Math 3a');
    triedCourses.push('Integrated Math 3a');
    // Special: 3b & Pre-Calc 1 in 9th grade, trimester 3
    fillNextAvailableBox(planner[0].querySelectorAll('td')[2], 'Integrated Math 3b');
    triedCourses.push('Integrated Math 3b');
    fillNextAvailableBox(planner[0].querySelectorAll('td')[2], 'Pre-Calc 1');
    triedCourses.push('Pre-Calc 1');
    // 10th Grade
    fillNextAvailableBox(planner[1].querySelectorAll('td')[0], 'AP Calculus AB 1');
    triedCourses.push('AP Calculus AB 1');
    fillNextAvailableBox(planner[1].querySelectorAll('td')[1], 'AP Calculus AB 2');
    triedCourses.push('AP Calculus AB 2');
    fillNextAvailableBox(planner[1].querySelectorAll('td')[2], 'Pre-Calc 2');
    triedCourses.push('Pre-Calc 2');
    // 11th Grade
    fillNextAvailableBox(planner[2].querySelectorAll('td')[0], 'Bridge to AP Calculus BC');
    triedCourses.push('Bridge to AP Calculus BC');
    fillNextAvailableBox(planner[2].querySelectorAll('td')[1], 'AP Calculus BC 1');
    triedCourses.push('AP Calculus BC 1');
    fillNextAvailableBox(planner[2].querySelectorAll('td')[2], 'AP Calculus BC 2');
    triedCourses.push('AP Calculus BC 2');
    // 12th Grade
    fillNextAvailableBox(planner[3].querySelectorAll('td')[0], 'AP Statistics 1');
    triedCourses.push('AP Statistics 1');
    fillNextAvailableBox(planner[3].querySelectorAll('td')[1], 'AP Statistics 2');
    triedCourses.push('AP Statistics 2');
    fillNextAvailableBox(planner[3].querySelectorAll('td')[2], 'AP Statistics Seminar');
    triedCourses.push('AP Statistics Seminar');
  }

  else if (mathStart === 'Integrated Math 3a') {
    // 9th Grade
    fillNextAvailableBox(planner[0].querySelectorAll('td')[0], 'Integrated Math 3a');
    triedCourses.push('Integrated Math 3a');
    fillNextAvailableBox(planner[0].querySelectorAll('td')[1], 'Integrated Math 3b');
    triedCourses.push('Integrated Math 3b');
    fillNextAvailableBox(planner[0].querySelectorAll('td')[2], 'Pre-Calc 1');
    triedCourses.push('Pre-Calc 1');
    // 10th Grade
    fillNextAvailableBox(planner[1].querySelectorAll('td')[0], 'AP Calculus AB 1');
    triedCourses.push('AP Calculus AB 1');
    fillNextAvailableBox(planner[1].querySelectorAll('td')[1], 'AP Calculus AB 2');
    triedCourses.push('AP Calculus AB 2');
    fillNextAvailableBox(planner[1].querySelectorAll('td')[2], 'Pre-Calc 2');
    triedCourses.push('Pre-Calc 2');
    // 11th Grade
    fillNextAvailableBox(planner[2].querySelectorAll('td')[0], 'Bridge to AP Calculus BC');
    triedCourses.push('Bridge to AP Calculus BC');
    fillNextAvailableBox(planner[2].querySelectorAll('td')[1], 'AP Calculus BC 1');
    triedCourses.push('AP Calculus BC 1');
    fillNextAvailableBox(planner[2].querySelectorAll('td')[2], 'AP Calculus BC 2');
    triedCourses.push('AP Calculus BC 2');
    // 12th Grade
    fillNextAvailableBox(planner[3].querySelectorAll('td')[0], 'AP Statistics 1');
    triedCourses.push('AP Statistics 1');
    fillNextAvailableBox(planner[3].querySelectorAll('td')[1], 'AP Statistics 2');
    triedCourses.push('AP Statistics 2');
    fillNextAvailableBox(planner[3].querySelectorAll('td')[2], 'AP Statistics Seminar');
    triedCourses.push('AP Statistics Seminar');
  }

  return triedCourses;
}