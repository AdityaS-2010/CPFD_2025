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
      'AP Stats 1', 'AP Stats 2', 'Stats'
    ],
    'Integrated Math 3a': [
      'Integrated Math 3a', 'Integrated Math 3b', 'Pre-Calc 1',
      'AP Calc AB 1', 'AP Calc AB 2', 'Pre-Calc 2',
      'Bridge to BC', 'AP Calc BC 1', 'AP Calc BC 2',
      'AP Stats 1', 'AP Stats 2', 'Stats'
    ]
  };

  const courses = pathways[mathStart];

  for (let i = 0; i < 4; i++) {
    const tds = planner[i].querySelectorAll('td');
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      if (index * 1 < courses.length) {
        const course = courses[index];
        if (course.includes('+')) {
          const [c1, c2] = course.split('+').map(s => s.trim());
          tds[j].querySelectorAll('textarea')[0].value = c1;
          tds[j].querySelectorAll('textarea')[1].value = c2;
        } else {
          tds[j].querySelectorAll('textarea')[0].value = course;
        }
      }
    }
  }
}
