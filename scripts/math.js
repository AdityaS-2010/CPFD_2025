// math.js – Handles auto-filling math pathways based on user selection

function fillMathPathway() {
  const mathStart = document.getElementById('mathStart').value;
  const planner = document.querySelectorAll('#plannerBody tr');

  const pathways = {
    'Math Accel': [
      'Math Accel', 'Integrated Math 1a', 'Integrated Math 1b',
      'Integrated Math 2a', 'Integrated Math 2b', 'Trigonometry',
      'Integrated Math 3a', 'Integrated Math 3b', 'Pre-Calc 1',
      'AP Calc AB 1', 'AP Calc AB 2', 'Pre-Calc 2'
    ],
    'Integrated Math 1a': [
      'Integrated Math 1a', 'Integrated Math 1b', 'Integrated Math 2a',
      'Integrated Math 2b', 'Integrated Math 3a', 'Integrated Math 3b + Pre-Calc 1',
      'AP Calc AB 1', 'AP Calc AB 2', 'Pre-Calc 2',
      'Bridge to BC', 'AP Calc BC 1', 'AP Calc BC 2'
    ],
    'Integrated Math 2a': [
      'Integrated Math 2a', 'Integrated Math 2b', 'Trigonometry',
      'Integrated Math 3a', 'Integrated Math 3b', 'Pre-Calc 1',
      'AP Calc AB 1', 'AP Calc AB 2', 'Pre-Calc 2',
      'Bridge to BC', 'AP Calc BC 1', 'AP Calc BC 2'
    ],
    'Integrated Math 2b': [
      'Integrated Math 2b', 'Integrated Math 3a', 'Integrated Math 3b + Pre-Calc 1',
      'AP Calc AB 1', 'AP Calc AB 2', 'Pre-Calc 2',
      'Bridge to BC', 'AP Calc BC 1', 'AP Calc BC 2',
      'AP Stats 1', 'AP Stats 2', 'AP Stats Seminar'
    ],
    'Integrated Math 3a': [
      'Integrated Math 3a', 'Integrated Math 3b', 'Pre-Calc 1',
      'AP Calc AB 1', 'AP Calc AB 2', 'Pre-Calc 2',
      'Bridge to BC', 'AP Calc BC 1', 'AP Calc BC 2',
      'AP Stats 1', 'AP Stats 2', 'AP Stats Seminar'
    ]
  };

  const courses = pathways[mathStart];
  let courseIndex = 0;

  // Loop through each grade (row)
  for (let i = 0; i < 4 && courseIndex < courses.length; i++) {
    const tds = planner[i].querySelectorAll('td');
    // Loop through each trimester (cell)
    for (let j = 0; j < 3 && courseIndex < courses.length; j++) {
      const cell = tds[j];
      const boxes = cell.querySelectorAll('textarea');

      // Find the next available box in this trimester
      let boxIdx = 0;
      while (boxIdx < boxes.length && boxes[boxIdx].value.trim() !== '') {
        boxIdx++;
      }
      if (boxIdx >= boxes.length) continue; // No space in this trimester

      const course = courses[courseIndex];

      if (course.includes('+')) {
        // Special case: fill two boxes in the same trimester
        const [c1, c2] = course.split('+').map(s => s.trim());
        // Find two available boxes
        let firstBox = -1, secondBox = -1;
        for (let b = 0; b < boxes.length; b++) {
          if (boxes[b].value.trim() === '') {
            if (firstBox === -1) firstBox = b;
            else if (secondBox === -1) {
              secondBox = b;
              break;
            }
          }
        }
        if (firstBox !== -1) boxes[firstBox].value = c1;
        if (secondBox !== -1) boxes[secondBox].value = c2;
        // If only one box available, fill c1 and skip c2
        courseIndex++;
      } else {
        boxes[boxIdx].value = course;
        courseIndex++;
      }
    }
  }
}