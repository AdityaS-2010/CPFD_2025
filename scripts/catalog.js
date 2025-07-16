export const courses = [

  // --- A - Social Science ---

  { name: "World History 1", grades: [10], ucArea: "A", prerequisites: [] },
  { name: "World History 2", grades: [10], ucArea: "A", prerequisites: ["World History 1"] },

  { name: "AP World History 1", grades: [10], ucArea: "A", prerequisites: [] },
  { name: "AP World History 2", grades: [10], ucArea: "A", prerequisites: ["AP World History 1"] },

  { name: "World Geography & Cultures", grades: [10], ucArea: "A", prerequisites: ["AP World History 1", "AP World History 2"] },

  { name: "US History 1", grades: [11], ucArea: "A", prerequisites: [] },
  { name: "US History 2", grades: [11], ucArea: "A", prerequisites: ["US History 1"] },

  { name: "AP US History 1", grades: [11], ucArea: "A", prerequisites: [] },
  { name: "AP US History 2", grades: [11], ucArea: "A", prerequisites: ["AP US History 1"] },
  { name: "AP US History Seminar", grades: [11], ucApproved: false, prerequisites: ["AP US History 1", "AP US History 2"] },

  { name: "Civics", grades: [12], ucArea: "A", prerequisites: ["US History 1", "US History 2"] },
  { name: "Economics", grades: [12], ucArea: "A", prerequisites: ["US History 1", "US History 2"] },

  { name: "AP US Government & Politics 1", grades: [12], ucArea: "A", prerequisites: [] },
  { name: "AP US Government & Politics 2", grades: [12], ucArea: "A", prerequisites: ["AP US Government & Politics 1"] },
  { name: "AP US Government Seminar", grades: [12], ucApproved: false, prerequisites: ["AP US Government & Politics 1", "AP US Government & Politics 2"] },

  { name: "AP Human Geography 1", grades: [9,10,11,12], ucArea: "A", prerequisites: [] },
  { name: "AP Human Geography 2", grades: [9,10,11,12], ucArea: "A", prerequisites: ["AP Human Geography 1"] },
  { name: "AP Human Geography Seminar", grades: [9,10,11,12], ucApproved: false, prerequisites: ["AP Human Geography 1", "AP Human Geography 2"] },

  // --- B - English ---

  { name: "High School English 1", grades: [9], ucArea: "B", prerequisites: [] },
  { name: "High School English 2", grades: [9], ucArea: "B", prerequisites: ["High School English 1"] },

  { name: "Honors High School English 1", grades: [9], ucArea: "B", prerequisites: [] },
  { name: "Honors High School English 2", grades: [9], ucArea: "B", prerequisites: ["Honors High School English 1"] },

  { name: "High School English 3", grades: [10], ucArea: "B", prerequisites: ["High School English 1", "High School English 2"] },
  { name: "High School English 4", grades: [10], ucArea: "B", prerequisites: ["High School English 3"] },

  { name: "Honors Humanities 1", grades: [10], ucArea: "B", prerequisites: [] },
  { name: "Honors Humanities 2", grades: [10], ucArea: "B", prerequisites: ["Honors Humanities 1"] },

  { name: "AP English Seminar 1", grades: [10], ucArea: "B", prerequisites: [] },
  { name: "AP English Seminar 2", grades: [10], ucArea: "B", prerequisites: ["AP English Seminar 1"] },

  { name: "American Literature 1", grades: [11], ucArea: "B", prerequisites: ["High School English 3", "High School English 4"] },
  { name: "American Literature 2", grades: [11], ucArea: "B", prerequisites: ["American Literature 1"] },

  { name: "Ethnic Literature 1", grades: [11, 12], ucArea: "B", prerequisites: [] },
  { name: "Ethnic Literature 2", grades: [11, 12], ucArea: "B", prerequisites: ["Ethnic Literature 1"] },

  { name: "Expository Reading & Writing 1", grades: [10, 11, 12], ucArea: "B", prerequisites: [] },
  { name: "Expository Reading & Writing 2", grades: [10, 11, 12], ucArea: "B", prerequisites: ["Expository Reading & Writing 1"] },

  { name: "World Literature 1", grades: [12], ucArea: "B", prerequisites: [] },
  { name: "World Literature 2", grades: [12], ucArea: "B", prerequisites: ["World Literature 1"] },

  { name: "AP English Language 1", grades: [11, 12], ucArea: "B", prerequisites: [] },
  { name: "AP English Language 2", grades: [11, 12], ucArea: "B", prerequisites: ["AP English Language 1"] },
  { name: "AP English Language Seminar", grades: [11, 12], ucApproved: false, prerequisites: ["AP English Language 1", "AP English Language 2"] },

  { name: "AP English Literature 1", grades: [11, 12], ucArea: "B", prerequisites: [] },
  { name: "AP English Literature 2", grades: [11, 12], ucArea: "B", prerequisites: ["AP English Literature 1"] },
  { name: "AP English Literature Seminar", grades: [11, 12], ucApproved: false, prerequisites: ["AP English Literature 1", "AP English Literature 2"] },

  // --- C - Mathematics ---

  { name: "Math Accel 1", grades: [9,10,11,12], ucApproved: false, prerequisites: [] },
  { name: "Math Accel 2", grades: [9,10,11,12], ucApproved: false, prerequisites: ["Math Accel 1"] },

  { name: "Integrated Math 1a", grades: [9,10,11,12], ucArea: "C", prerequisites: [] },
  { name: "Integrated Math 1b", grades: [9,10,11,12], ucArea: "C", prerequisites: ["Integrated Math 1a"] },

  { name: "Integrated Math 2a", grades: [9,10,11,12], ucArea: "C", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Integrated Math 2b", grades: [9,10,11,12], ucArea: "C", prerequisites: ["Integrated Math 2a"] },

  { name: "Integrated Math 3a", grades: [9,10,11,12], ucArea: "C", prerequisites: ["Integrated Math 2a", "Integrated Math 2b"] },
  { name: "Integrated Math 3b", grades: [9,10,11,12], ucArea: "C", prerequisites: ["Integrated Math 3a"] },

  { name: "Trigonometry", grades: [9,10,11,12], ucArea: "C", prerequisites: ["Integrated Math 2a", "Integrated Math 2b"] },

  { name: "College Algebra", grades: [10,11,12], ucArea: "C", prerequisites: ["Integrated Math 3a", "Integrated Math 3b"] },

  { name: "Pre-Calc 1", grades: [9,10,11,12], ucArea: "C", prerequisites: ["Integrated Math 3a", "Integrated Math 3b"] },
  { name: "Pre-Calc 2", grades: [9,10,11,12], ucArea: "C", prerequisites: ["Pre-Calc 1"] },

  { name: "AP Calculus AB 1", grades: [10,11,12], ucArea: "C", prerequisites: ["Pre-Calc 1"] },
  { name: "AP Calculus AB 2", grades: [10,11,12], ucArea: "C", prerequisites: ["AP Calculus AB 1"] },

  { name: "Bridge to AP Calculus BC", grades: [10,11,12], ucApproved: false, prerequisites: ["AP Calculus AB 1", "AP Calculus AB 2"] },

  { name: "AP Calculus BC 1", grades: [10,11,12], ucArea: "C", prerequisites: ["AP Calculus AB 1", "AP Calculus AB 2"] },
  { name: "AP Calculus BC 2", grades: [10,11,12], ucArea: "C", prerequisites: ["AP Calculus BC 1"] },

  { name: "AP Statistics 1", grades: [10,11,12], ucArea: "C", prerequisites: ["Integrated Math 3a", "Integrated Math 3b"] },
  { name: "AP Statistics 2", grades: [10,11,12], ucArea: "C", prerequisites: ["AP Statistics 1"] },
  { name: "AP Statistics Seminar", grades: [10,11,12], ucApproved: false, prerequisites: ["AP Statistics 1", "AP Statistics 2"] },

  // --- D - Sciences ---
    

  { name: "Biology of the Living Earth 1", grades: [9,10], ucArea: "D", prerequisites: [] },
  { name: "Biology of the Living Earth 2", grades: [9,10], ucArea: "D", prerequisites: ["Biology of the Living Earth 1"] },

  { name: "AP Biology 3", grades: [10,11,12], ucArea: "D", prerequisites: ["Biology of the Living Earth 1", "Biology of the Living Earth 2"] },
  { name: "AP Biology 4", grades: [10,11,12], ucArea: "D", prerequisites: ["AP Biology 3"] },
  { name: "AP Biology Seminar", grades: [10,11,12], ucApproved: false, prerequisites: ["AP Biology 3", "AP Biology 4"] },

  { name: "Principles of Biomedical Sciences 1", grades: [9,10,11,12], ucArea: "D", prerequisites: [] },
  { name: "Principles of Biomedical Sciences 2", grades: [9,10,11,12], ucArea: "D", prerequisites: ["Principles of Biomedical Sciences 1"] },

  { name: "Human Body Systems 1", grades: [10,11,12], ucArea: "D", prerequisites: ["Principles of Biomedical Sciences 1", "Principles of Biomedical Sciences 2"] },
  { name: "Human Body Systems 2", grades: [10,11,12], ucArea: "D", prerequisites: ["Human Body Systems 1"] },

  { name: "Honors Medical Interventions 1", grades: [11,12], ucArea: "D", prerequisites: ["Principles of Biomedical Sciences 1", "Principles of Biomedical Sciences 2", "Human Body Systems 1", "Human Body Systems 2"] },
  { name: "Honors Medical Interventions 2", grades: [11,12], ucArea: "D", prerequisites: ["Honors Medical Interventions 1"] },

  { name: "Fundamentals of Physics & Chemistry 1", grades: [10,11,12], ucArea: "D", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Fundamentals of Physics & Chemistry 2", grades: [10,11,12], ucArea: "D", prerequisites: ["Fundamentals of Physics & Chemistry 1"] },

  { name: "Chemistry in the Earth System 1", grades: [9,10,11,12], ucArea: "D", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Chemistry in the Earth System 2", grades: [9,10,11,12], ucArea: "D", prerequisites: ["Chemistry in the Earth System 1"] },

  { name: "Physics of the Universe 1", grades: [10,11,12], ucArea: "D", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Physics of the Universe 2", grades: [10,11,12], ucArea: "D", prerequisites: ["Physics of the Universe 1"] },

  { name: "Marine Science 1", grades: [10,11,12], ucArea: "D", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Marine Science 2", grades: [10,11,12], ucArea: "D", prerequisites: ["Marine Science 1"] },

  { name: "AP Chemistry 3", grades: [10,11,12], ucArea: "D", prerequisites: ["Chemistry in the Earth System 1", "Chemistry in the Earth System 2"] },
  { name: "AP Chemistry 4", grades: [10,11,12], ucArea: "D", prerequisites: ["AP Chemistry 3"] },
  { name: "AP Chemistry Seminar", grades: [10,11,12], ucApproved: false, prerequisites: ["AP Chemistry 3", "AP Chemistry 4"] },

  { name: "AP Environmental Science 1", grades: [10,11,12], ucArea: "D", prerequisites: ["Biology of the Living Earth 1", "Biology of the Living Earth 2", "Chemistry in the Earth System 1", "Chemistry in the Earth System 2"] },
  { name: "AP Environmental Science 2", grades: [10,11,12], ucArea: "D", prerequisites: ["AP Environmental Science 1"] },
  { name: "AP Environmental Science Seminar", grades: [10,11,12], ucApproved: false, prerequisites: ["AP Environmental Science 1", "AP Environmental Science 2"] },

  { name: "AP Physics C: Mechanics 1a", grades: [10,11,12], ucArea: "D", prerequisites: ["AP Calculus AB 1"] },
  { name: "AP Physics C: Mechanics 1b", grades: [10,11,12], ucArea: "D", prerequisites: ["AP Physics C: Mechanics 1a"] },
  { name: "AP Physics C: Mechanics Seminar", grades: [10,11,12], ucApproved: false, prerequisites: ["AP Physics C: Mechanics 1a", "AP Physics C: Mechanics 1b"] },

  { name: "AP Physics C: Electricity & Magnetism 1", grades: [11,12], ucArea: "D", prerequisites: ["AP Physics C: Mechanics 1a", "AP Physics C: Mechanics 1b"] },
  { name: "AP Physics C: Electricity & Magnetism 2", grades: [11,12], ucArea: "D", prerequisites: ["AP Physics C: Electricity & Magnetism 1"] },
  { name: "AP Physics C: Electricity & Magnetism Seminar", grades: [11,12], ucApproved: false, prerequisites: ["AP Physics C: Electricity & Magnetism 1", "AP Physics C: Electricity & Magnetism 2"] },

  // --- F - Fine Arts ---

  { name: "Drawing and Painting 1", grades: [9,10,11,12], ucArea: "F", prerequisites: [] },
  { name: "Drawing and Painting 2", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Drawing and Painting 1"] },
  { name: "Drawing and Painting 3", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Drawing and Painting 2"] },
  { name: "Drawing and Painting 4", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Drawing and Painting 3"] },

  { name: "3D Computer Animation 1", grades: [9,10,11,12], ucArea: "F", prerequisites: [] },
  { name: "3D Computer Animation 2", grades: [9,10,11,12], ucArea: "F", prerequisites: ["3D Computer Animation 1"] },
  { name: "3D Computer Animation 3", grades: [10,11,12], ucArea: "F", prerequisites: ["3D Computer Animation 2"] },
  { name: "3D Computer Animation 4", grades: [10,11,12], ucArea: "F", prerequisites: ["3D Computer Animation 3"] },

  { name: "Art of Game Design 1", grades: [10,11,12], ucArea: "F", prerequisites: ["3D Computer Animation 1"] },
  { name: "Art of Game Design 2", grades: [10,11,12], ucArea: "F", prerequisites: ["Art of Game Design 1"] },

  { name: "Ceramics 1", grades: [10,11,12], ucArea: "F", prerequisites: [] },
  { name: "Ceramics 2", grades: [10,11,12], ucArea: "F", prerequisites: ["Ceramics 1"] },
  { name: "Ceramics 3", grades: [10,11,12], ucArea: "F", prerequisites: ["Ceramics 2"] },
  { name: "Ceramics 4", grades: [10,11,12], ucArea: "F", prerequisites: ["Ceramics 3"] },

    

  { name: "Design Mixed Media 1", grades: [9,10,11,12], ucArea: "F", prerequisites: [] },
  { name: "Design Mixed Media 2", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Design Mixed Media 1"] },

  { name: "Digital Media Productions 1", grades: [9,10,11,12], ucArea: "F", prerequisites: [] },
  { name: "Digital Media Productions 2", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Digital Media Productions 1"] },
  { name: "Digital Media Productions 3", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Digital Media Productions 2"] },
  { name: "Digital Media Productions 4", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Digital Media Productions 3"] },

  { name: "Drama 1", grades: [9,10,11,12], ucArea: "F", prerequisites: [] },
  { name: "Drama 2", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Drama 1"] },
  { name: "Drama 3", grades: [10,11,12], ucArea: "F", prerequisites: ["Drama 2"] },
  { name: "Drama 4", grades: [10,11,12], ucArea: "F", prerequisites: ["Drama 3"] },
  { name: "Drama 5", grades: [10,11,12], ucArea: "F", prerequisites: ["Drama 4"] },
  { name: "Drama 6", grades: [10,11,12], ucArea: "F", prerequisites: ["Drama 5"] },
  { name: "Theater Study 7", grades: [10,11,12], ucArea: "F", prerequisites: ["Drama 6"] },
  { name: "Theater Study 8", grades: [10,11,12], ucArea: "F", prerequisites: ["Theater Study 7"] },

  { name: "Technical Production for Theater 1", grades: [9,10,11,12], ucArea: "F", prerequisites: [] },
  { name: "Technical Production for Theater 2", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Technical Production for Theater 1"] },
  { name: "Technical Production for Theater 3", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Technical Production for Theater 2"] },
  { name: "Technical Production for Theater 4", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Technical Production for Theater 3"] },

  { name: "Digital Photography 1", grades: [9,10,11,12], ucArea: "F", prerequisites: [] },
  { name: "Digital Photography 2", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Digital Photography 1"] },
  { name: "Digital Photography 3", grades: [10,11,12], ucArea: "F", prerequisites: ["Digital Photography 2"] },
  { name: "Digital Photography 4", grades: [10,11,12], ucArea: "F", prerequisites: ["Digital Photography 3"] },
  { name: "Digital Photography 5", grades: [10,11,12], ucArea: "F", prerequisites: ["Digital Photography 4"] },
  { name: "Digital Photography 6", grades: [10,11,12], ucArea: "F", prerequisites: ["Digital Photography 5"] },

  { name: "Studio Art", grades: [10,11,12], ucArea: "F", prerequisites:[ [
    "Drawing and Painting 4"], ["Digital Photography 6"], ["Ceramics 4"], 
    ["3D Computer Animation 4"], ["Digital Media Productions 4"], ] 
    },

  { name: "AP Studio Art: Drawing 1", grades: [10,11,12], ucArea: "F", prerequisites: [] },
  { name: "AP Studio Art: Drawing 2", grades: [10,11,12], ucArea: "F", prerequisites: ["AP Studio Art: Drawing 1"] },

  { name: "AP Studio Art: 2D 1", grades: [10,11,12], ucArea: "F", prerequisites: [] },
  { name: "AP Studio Art: 2D 2", grades: [10,11,12], ucArea: "F", prerequisites: ["AP Studio Art: 2D 1"] },

  { name: "AP Studio Art: 3D 1", grades: [10,11,12], ucArea: "F", prerequisites: [] },
  { name: "AP Studio Art: 3D 2", grades: [10,11,12], ucArea: "F", prerequisites: ["AP Studio Art: 3D 1"] },

  { name: "Orchestra 1", grades: [9,10,11,12], ucArea: "F", prerequisites: [] },
  { name: "Orchestra 2", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Orchestra 1"] },

  { name: "Chamber Orchestra 1", grades: [9,10,11,12], ucArea: "F", prerequisites: [] },
  { name: "Chamber Orchestra 2", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Chamber Orchestra 1"] },

  { name: "Concert Band 1", grades: [9,10,11,12], ucArea: "F", prerequisites: [] },
  { name: "Concert Band 2", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Concert Band 1"] },

  { name: "Wind Ensemble 1", grades: [10,11,12], ucArea: "F", prerequisites: ["Concert Band 2"] },
  { name: "Wind Ensemble 2", grades: [10,11,12], ucArea: "F", prerequisites: ["Wind Ensemble 1"] },

  { name: "Symphonic Band 1", grades: [10,11,12], ucArea: "F", prerequisites: [] },
  { name: "Symphonic Band 2", grades: [10,11,12], ucArea: "F", prerequisites: ["Symphonic Band 1"] },

  { name: "AP Music Theory 1", grades: [10,11,12], ucArea: "F", prerequisites: [] },
  { name: "AP Music Theory 2", grades: [10,11,12], ucArea: "F", prerequisites: ["AP Music Theory 1"] },
  { name: "Harmony", grades: [10,11,12], ucArea: "F", prerequisites: ["AP Music Theory 2"] },

  { name: "Tall Flags (Dance Prop)", grades: [9,10,11,12], ucArea: "F", prerequisites: [] },

  { name: "Concert Choir 1", grades: [9,10,11,12], ucArea: "F", prerequisites: [] },
  { name: "Concert Choir 2", grades: [9,10,11,12], ucArea: "F", prerequisites: ["Concert Choir 1"] },

  { name: "Classical Vocal Ensemble", grades: [10,11,12], ucArea: "F", prerequisites: ["Concert Choir 2"] },

  // --- G - Electives ---

  { name: "AVID 1", grades: [9], ucArea: "G", prerequisites: [] },
  { name: "AVID 2", grades: [9], ucArea: "G", prerequisites: ["AVID 1"] },
  { name: "AVID 3", grades: [10], ucArea: "G", prerequisites: ["AVID 2"] },
  { name: "AVID 4", grades: [10], ucArea: "G", prerequisites: ["AVID 3"] },
  { name: "AVID 5", grades: [11], ucArea: "G", prerequisites: ["AVID 4"] },
  { name: "AVID 6", grades: [11], ucArea: "G", prerequisites: ["AVID 5"] },
  { name: "AVID Senior Seminar 1", grades: [12], ucArea: "G", prerequisites: ["AVID 6"] },
  { name: "AVID Senior Seminar 2", grades: [12], ucArea: "G", prerequisites: ["AVID Senior Seminar 1"] },

  { name: "Ethnic Studies 1", grades: [9,10,11,12], ucArea: "G", prerequisites: [] },
  { name: "Ethnic Studies 2", grades: [9,10,11,12], ucArea: "G", prerequisites: ["Ethnic Studies 1"] },

  { name: "Business Law 1", grades: [9,10,11,12], ucArea: "G", prerequisites: [] },
  { name: "Business Law 2", grades: [9,10,11,12], ucArea: "G", prerequisites: ["Business Law 1"] },

  { name: "Introduction to Finance 1", grades: [10,11,12], ucArea: "G", prerequisites: ["Integrated Math 3a", "Integrated Math 3b"] },
  { name: "Introduction to Finance 2", grades: [10,11,12], ucArea: "G", prerequisites: ["Introduction to Finance 1"] },

  { name: "Marketing Economics 1", grades: [9,10,11,12], ucArea: "G", prerequisites: [] },
  { name: "Marketing Economics 2", grades: [9,10,11,12], ucArea: "G", prerequisites: ["Marketing Economics 1"] },

  { name: "Child Development & Psychology 1", grades: [9,10,11,12], ucArea: "G", prerequisites: [] },
  { name: "Child Development & Psychology 2", grades: [9,10,11,12], ucArea: "G", prerequisites: ["Child Development & Psychology 1"] },
  { name: "Child Development & Psychology 3", grades: [9,10,11,12], ucArea: "G", prerequisites: ["Child Development & Psychology 2"] },
  { name: "Child Development & Psychology 4", grades: [9,10,11,12], ucArea: "G", prerequisites: ["Child Development & Psychology 3"] },

  { name: "Robotics 1", grades: [9,10,11,12], ucArea: "G", prerequisites: ["Integrated Math 1a"] },
  { name: "Robotics 2", grades: [9,10,11,12], ucArea: "G", prerequisites: ["Robotics 1"] },

  { name: "Introduction to Engineering Design 1", grades: [9,10,11,12], ucArea: "G", prerequisites: [] },
  { name: "Introduction to Engineering Design 2", grades: [9,10,11,12], ucArea: "G", prerequisites: ["Introduction to Engineering Design 1"] },

  { name: "Honors Principles of Engineering 1", grades: [10,11,12], ucArea: "G", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Honors Principles of Engineering 2", grades: [10,11,12], ucArea: "G", prerequisites: ["Honors Principles of Engineering 1"] },

  { name: "Computer Science and Software Engineering 1", grades: [9,10,11,12], ucArea: "G", prerequisites: [] },
  { name: "Computer Science and Software Engineering 2", grades: [9,10,11,12], ucArea: "G", prerequisites: ["Computer Science and Software Engineering 1"] },

  { name: "AP Computer Science Principles 1", grades: [10,11,12], ucArea: "G", prerequisites: ["Computer Science and Software Engineering 1", "Computer Science and Software Engineering 2"] },
  { name: "AP Computer Science Principles 2", grades: [10,11,12], ucArea: "G", prerequisites: ["AP Computer Science Principles 1"] },

  { name: "Data Structures 1", grades: [10,11,12], ucArea: "G", prerequisites: ["AP Computer Science Principles 1", "AP Computer Science Principles 2"] },

  { name: "AP Computer Science A 1", grades: [11,12], ucArea: "G", prerequisites: ["AP Computer Science Principles 1", "AP Computer Science Principles 2"] },
  { name: "AP Computer Science A 2", grades: [11,12], ucArea: "G", prerequisites: ["AP Computer Science A 1"] },

  { name: "Data Structures 2", grades: [11,12], ucArea: "G", prerequisites: ["AP Computer Science A 1", "AP Computer Science A 2"] },

  { name: "AP Human Geography 1", grades: [9,10,11,12], ucArea: "A", prerequisites: [] },
  { name: "AP Human Geography 2", grades: [9,10,11,12], ucArea: "A", prerequisites: ["AP Human Geography 1"] },
  { name: "AP Human Geography Seminar", grades: [9,10,11,12], ucApproved: false, prerequisites: ["AP Human Geography 1", "AP Human Geography 2"] },

  { name: "AP Psychology 1", grades: [11,12], ucArea: "G", prerequisites: [] },
  { name: "AP Psychology 2", grades: [11,12], ucArea: "G", prerequisites: ["AP Psychology 1"] },

  { name: "Psychology 1", grades: [11,12], ucArea: "G", prerequisites: ["AP Psychology 1", "AP Psychology 2"] },

  { name: "Link Crew Leadership 1", grades: [10,11,12], ucArea: "G", prerequisites: [] },
  { name: "Link Crew Leadership 2", grades: [10,11,12], ucArea: "G", prerequisites: ["Link Crew Leadership 1"] },

  { name: "ASB", grades: [9,10,11,12], ucArea: "G", prerequisites: [] },

  { name: "Internship", grades: [10,11,12], ucArea: "G", prerequisites: [] },

  { name: "Work Experience 1", grades: [10,11,12], ucArea: "G", prerequisites: [] },
  { name: "Work Experience 2", grades: [10,11,12], ucArea: "G", prerequisites: ["Work Experience 1"] },

  { name: "Yearbook 1", grades: [9,10,11,12], ucArea: "G", prerequisites: [] },
  { name: "Yearbook 2", grades: [9,10,11,12], ucArea: "G", prerequisites: ["Yearbook 1"] },

  { name: "Library & Info. Science Teaching Assistant 1", grades: [10,11,12], ucArea: "G", prerequisites: [] },
  { name: "Library & Info. Science Teaching Assistant 2", grades: [10,11,12], ucArea: "G", prerequisites: ["Library & Info. Science Teaching Assistant 1"] },

  { name: "Vocational Learning Assistant", grades: [10,11,12], ucArea: "G", prerequisites: [] },

  { name: "Academic Tutor", grades: [11,12], ucArea: "G", prerequisites: [] },

  { name: "Academic Literacy 1", grades: [9,10,11,12], ucArea: "G", prerequisites: [] },
  { name: "Academic Literacy 2", grades: [9,10,11,12], ucArea: "G", prerequisites: ["Academic Literacy 1"] },

  { name: "Academic Success", grades: [9,10,11,12], ucArea: "G", prerequisites: [] },

  { name: "Art Exploration", grades: [9,10,11,12], ucArea: "G", prerequisites: [] }
];




