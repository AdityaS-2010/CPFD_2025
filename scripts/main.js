// main.js – Core logic for planner credit tracking and CTE pathway handling

// Graduation and UC/CSU a-g subject credit requirements
const creditRequirements = {
  graduation: {
    English: 40,
    Math: 20,
    Science: 20,
    SocialScience: 30,
    LanguageOrVAPA: 10,
    PE: 20,
    Health: 5,
    Electives: 85,
    Total: 230,
  },
  ucEligibility: {
    A: 20, // Social Science
    B: 40, // English
    C: 30, // Math (3 years)
    D: 20, // Science (2 years)
    E: 20, // Language
    F: 10, // VAPA
    G: 10  // College-prep elective
  }
};

// Track science subcategory tags
const scienceTags = {
  "Biology of the Living Earth 1-2": { life_science: true, physical_science: false },
  "Principles of Biomedical Science 1-2": { life_science: true, physical_science: false },
  "AP Biology 3-4": { life_science: true, physical_science: false },
  "Human Body Systems 1-2": { life_science: true, physical_science: false },
  "Honors Medical Interventions 1-2": { life_science: true, physical_science: false },
  "AP Environmental Science 1-2": { life_science: true, physical_science: false },

  "Chemistry in the Earth System 1-2": { life_science: false, physical_science: true },
  "AP Chemistry 3-4": { life_science: false, physical_science: true },
  "Fundamentals of Physics & Chemistry 1-2": { life_science: false, physical_science: true },
  "Physics of the Universe 1-2": { life_science: false, physical_science: true },
  "Marine Science 1-2": { life_science: false, physical_science: true },
  "AP Physics C: Mechanics 1a-1b": { life_science: false, physical_science: true },
  "AP Physics C: Electricity & Magnetism 1-2": { life_science: false, physical_science: true }
};

// Elective mapping to CTE pathways
const ctePathwayCourses = {
  AME: [
    "Digital Media Production 1-4", "Drama 1-2", "Drama 3-4", "Drama 5-6",
    "Broadcast Journalism 3-4", "Broadcast Production/Theater 3-4",
    "Theater Study and Performance 7-8", "3D Computer Animation 1-4",
    "AP Studio Art", "Photography 1-2", "Photography 3-4", "Photography 5-6"
  ],
  Business: [
    "Business Law 1-2", "Marketing Economics 1-2", "Introduction to Finance 1-2",
    "Internship 1-2", "Work Experience 1-2"
  ],
  Education: [
    "Child Development & Psychology 1-2", "Child Development & Psychology 3-4"
  ],
  Engineering: [
    "Introduction to Engineering Design 1-2", "Honors Principles of Engineering 1-2",
    "Robotics 1-2"
  ],
  Health: [
    "Principles of Biomedical Science 1-2", "Human Body Systems 1-2",
    "Honors Medical Interventions 1-2", "Internship"
  ],
  ICT: [
    "Computer Science and Software Engineering 1-2",
    "AP Computer Science Principles 1-2",
    "AP Computer Science A 1-2",
    "Data Structures 1", "Data Structures 2"
  ]
};

// Future logic: 
// 1. Parse the planner table and classify each course by subject
// 2. Track total credits per category and validate against grad and UC requirements
// 3. Identify CTE pathway from elective input and adjust suggestions accordingly
