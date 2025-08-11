window.courseCatalog = [

  // --- A - Social Science ---
  { name: "World History 1", grades: [10], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "World History", prerequisites: [] },
  { name: "World History 2", grades: [10], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "World History", prerequisites: ["World History 1"] },

  { name: "AP World History 1", grades: [10], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "World History", prerequisites: [] },
  { name: "AP World History 2", grades: [10], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "World History", prerequisites: ["AP World History 1"] },
  { name: "World Geography & Cultures", grades: [10], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "World History", prerequisites: ["AP World History 1", "AP World History 2"] },

  { name: "US History 1", grades: [11], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "US History", prerequisites: [] },
  { name: "US History 2", grades: [11], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "US History", prerequisites: ["US History 1"] },

  { name: "AP US History 1", grades: [11], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "US History", prerequisites: [] },
  { name: "AP US History 2", grades: [11], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "US History", prerequisites: ["AP US History 1"] },
  { name: "AP US History Seminar", grades: [11], ucApproved: false, gradRequirement: "Social Science", hsRequirement: "US History", prerequisites: ["AP US History 1", "AP US History 2"] },

  { name: "Civics", grades: [12], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "Civics/Economics", prerequisites: ["US History 1", "US History 2"] },
  { name: "Economics", grades: [12], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "Civics/Economics", prerequisites: ["US History 1", "US History 2"] },

  { name: "AP US Government & Politics 1", grades: [12], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "Civics/Economics", prerequisites: [] },
  { name: "AP US Government & Politics 2", grades: [12], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "Civics/Economics", prerequisites: ["AP US Government & Politics 1"] },
  { name: "AP US Government Seminar", grades: [12], ucApproved: false, gradRequirement: "Social Science", hsRequirement: "Civics/Economics", prerequisites: ["AP US Government & Politics 1", "AP US Government & Politics 2"] },



  // --- B - English ---

  { name: "High School English 1", grades: [9], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "High School English 2", grades: [9], ucArea: "B", gradRequirement: "English", prerequisites: ["High School English 1"] },

  { name: "Honors High School English 1", grades: [9], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "Honors High School English 2", grades: [9], ucArea: "B", gradRequirement: "English", prerequisites: ["Honors High School English 1"] },

  { name: "High School English 3", grades: [10], ucArea: "B", gradRequirement: "English", prerequisites: ["High School English 1", "High School English 2"] },
  { name: "High School English 4", grades: [10], ucArea: "B", gradRequirement: "English", prerequisites: ["High School English 3"] },

  { name: "Honors Humanities 1", grades: [10], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "Honors Humanities 2", grades: [10], ucArea: "B", gradRequirement: "English", prerequisites: ["Honors Humanities 1"] },

  { name: "AP English Seminar 1", grades: [10], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "AP English Seminar 2", grades: [10], ucArea: "B", gradRequirement: "English", prerequisites: ["AP English Seminar 1"] },

  { name: "American Literature 1", grades: [11], ucArea: "B", gradRequirement: "English", prerequisites: ["High School English 3", "High School English 4"] },
  { name: "American Literature 2", grades: [11], ucArea: "B", gradRequirement: "English", prerequisites: ["American Literature 1"] },

  { name: "Ethnic Literature 1", grades: [11, 12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "Ethnic Literature 2", grades: [11, 12], ucArea: "B", gradRequirement: "English", prerequisites: ["Ethnic Literature 1"] },

  { name: "Expository Reading & Writing 1", grades: [10, 11, 12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "Expository Reading & Writing 2", grades: [10, 11, 12], ucArea: "B", gradRequirement: "English", prerequisites: ["Expository Reading & Writing 1"] },

  { name: "World Literature 1", grades: [12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "World Literature 2", grades: [12], ucArea: "B", gradRequirement: "English", prerequisites: ["World Literature 1"] },

  { name: "AP English Language 1", grades: [11, 12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "AP English Language 2", grades: [11, 12], ucArea: "B", gradRequirement: "English", prerequisites: ["AP English Language 1"] },
  { name: "AP English Language Seminar", grades: [11, 12], ucApproved: false, gradRequirement: "English", prerequisites: ["AP English Language 1", "AP English Language 2"] },

  { name: "AP English Literature 1", grades: [11, 12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "AP English Literature 2", grades: [11, 12], ucArea: "B", gradRequirement: "English", prerequisites: ["AP English Literature 1"] },
  { name: "AP English Literature Seminar", grades: [11, 12], ucApproved: false, gradRequirement: "English", prerequisites: ["AP English Literature 1", "AP English Literature 2"] },

  // --- C - Mathematics ---

  { name: "Math Accel 1", grades: [9,10,11,12], ucApproved: false, gradRequirement: "Mathematics", prerequisites: [] },
  { name: "Math Accel 2", grades: [9,10,11,12], ucApproved: false, gradRequirement: "Mathematics", prerequisites: ["Math Accel 1"] },

  { name: "Integrated Math 1a", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: [] },
  { name: "Integrated Math 1b", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 1a"] },

  { name: "Integrated Math 2a", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Integrated Math 2b", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 2a"] },

  { name: "Integrated Math 3a", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 2a", "Integrated Math 2b"] },
  { name: "Integrated Math 3b", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 3a"] },

  { name: "Trigonometry", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 2a", "Integrated Math 2b"] },

  { name: "College Algebra 1", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 3a", "Integrated Math 3b"] },
  { name: "College Algebra 2", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["College Algebra 1"] },

  { name: "Pre-Calc 1", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 3a", "Integrated Math 3b"] },
  { name: "Pre-Calc 2", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Pre-Calc 1"] },

  { name: "AP Calculus AB 1", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Pre-Calc 1"] },
  { name: "AP Calculus AB 2", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["AP Calculus AB 1"] },

  { name: "Bridge to AP Calculus BC", grades: [10,11,12], ucApproved: false, gradRequirement: "Mathematics", prerequisites: ["AP Calculus AB 1", "AP Calculus AB 2"] },

  { name: "AP Calculus BC 1", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["AP Calculus AB 1", "AP Calculus AB 2"] },
  { name: "AP Calculus BC 2", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["AP Calculus BC 1"] },

  { name: "AP Statistics 1", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 3a", "Integrated Math 3b"] },
  { name: "AP Statistics 2", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["AP Statistics 1"] },
  { name: "AP Statistics Seminar", grades: [10,11,12], ucApproved: false, gradRequirement: "Mathematics", prerequisites: ["AP Statistics 1", "AP Statistics 2"] },

  // --- D - Sciences ---
    

  { name: "Biology of the Living Earth 1", grades: [9,10], ucArea: "D", gradRequirement: "Life Science", prerequisites: [] },
  { name: "Biology of the Living Earth 2", grades: [9,10], ucArea: "D", gradRequirement: "Life Science", prerequisites: ["Biology of the Living Earth 1"] },

  { name: "AP Biology 3", grades: [10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: [] },
  { name: "AP Biology 4", grades: [10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: ["AP Biology 3"] },
  { name: "AP Biology Seminar", grades: [10,11,12], ucApproved: false, gradRequirement: "Life Science", prerequisites: ["AP Biology 3", "AP Biology 4"] },

  { name: "Principles of Biomedical Sciences 1", grades: [9,10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: [] },
  { name: "Principles of Biomedical Sciences 2", grades: [9,10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: ["Principles of Biomedical Sciences 1"] },

  { name: "Human Body Systems 1", grades: [10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: [] },
  { name: "Human Body Systems 2", grades: [10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: ["Human Body Systems 1"] },

  { name: "Honors Medical Interventions 1", grades: [11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: [ ["Principles of Biomedical Sciences 1", "Principles of Biomedical Sciences 2", "Human Body Systems 1", "Human Body Systems 2"], ["AP Biology 3", "AP Biology 4", "AP Biology Seminar"], ] },
  { name: "Honors Medical Interventions 2", grades: [11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: ["Honors Medical Interventions 1"] },

  { name: "Fundamentals of Physics & Chemistry 1", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Fundamentals of Physics & Chemistry 2", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Fundamentals of Physics & Chemistry 1"] },

  { name: "Chemistry in the Earth System 1", grades: [9,10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Chemistry in the Earth System 2", grades: [9,10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Chemistry in the Earth System 1"] },

  { name: "Physics of the Universe 1", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Physics of the Universe 2", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Physics of the Universe 1"] },

  { name: "Marine Science 1", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Marine Science 2", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Marine Science 1"] },

  { name: "AP Chemistry 3", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: [] },
  { name: "AP Chemistry 4", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["AP Chemistry 3"] },
  { name: "AP Chemistry Seminar", grades: [10,11,12], ucApproved: false, gradRequirement: "Physical Science", prerequisites: ["AP Chemistry 3", "AP Chemistry 4"] },

  { name: "AP Environmental Science 1", grades: [10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: [] },
  { name: "AP Environmental Science 2", grades: [10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: ["AP Environmental Science 1"] },
  { name: "AP Environmental Science Seminar", grades: [10,11,12], ucApproved: false, gradRequirement: "Life Science", prerequisites: ["AP Environmental Science 1", "AP Environmental Science 2"] },

  { name: "AP Physics C: Mechanics 1a", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["AP Calculus AB 1"] },
  { name: "AP Physics C: Mechanics 1b", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["AP Physics C: Mechanics 1a"] },
  { name: "AP Physics C: Mechanics Seminar", grades: [10,11,12], ucApproved: false, gradRequirement: "Physical Science", prerequisites: ["AP Physics C: Mechanics 1a", "AP Physics C: Mechanics 1b"] },

  { name: "AP Physics C: Electricity & Magnetism 1", grades: [11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["AP Physics C: Mechanics 1a", "AP Physics C: Mechanics 1b"] },
  { name: "AP Physics C: Electricity & Magnetism 2", grades: [11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["AP Physics C: Electricity & Magnetism 1"] },
  { name: "AP Physics C: Electricity & Magnetism Seminar", grades: [11,12], ucApproved: false, gradRequirement: "Physical Science", prerequisites: ["AP Physics C: Electricity & Magnetism 1", "AP Physics C: Electricity & Magnetism 2"] },

  // --- F - Fine Arts ---

  { name: "Drawing and Painting 1", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Drawing and Painting 2", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drawing and Painting 1"] },
  { name: "Drawing and Painting 3", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drawing and Painting 2"] },
  { name: "Drawing and Painting 4", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drawing and Painting 3"] },

  { name: "3D Computer Animation 1", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "3D Computer Animation 2", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["3D Computer Animation 1"] },
  { name: "3D Computer Animation 3", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["3D Computer Animation 2"] },
  { name: "3D Computer Animation 4", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["3D Computer Animation 3"] },

  { name: "Art of Game Design 1", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["3D Computer Animation 1"] },
  { name: "Art of Game Design 2", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Art of Game Design 1"] },

  { name: "Ceramics 1", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Ceramics 2", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Ceramics 1"] },
  { name: "Ceramics 3", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Ceramics 2"] },
  { name: "Ceramics 4", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Ceramics 3"] },

  { name: "Design Mixed Media 1", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Design Mixed Media 2", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Design Mixed Media 1"] },

  { name: "Digital Media Productions 1", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Digital Media Productions 2", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Media Productions 1"] },
  { name: "Digital Media Productions 3", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Media Productions 2"] },
  { name: "Digital Media Productions 4", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Media Productions 3"] },

  { name: "Drama 1", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Drama 2", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drama 1"] },
  { name: "Drama 3", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drama 2"] },
  { name: "Drama 4", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drama 3"] },
  { name: "Drama 5", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drama 4"] },
  { name: "Drama 6", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drama 5"] },
  { name: "Theater Study 7", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drama 6"] },
  { name: "Theater Study 8", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Theater Study 7"] },

  { name: "Technical Production for Theater 1", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Technical Production for Theater 2", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Technical Production for Theater 1"] },
  { name: "Technical Production for Theater 3", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Technical Production for Theater 2"] },
  { name: "Technical Production for Theater 4", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Technical Production for Theater 3"] },

  { name: "Digital Photography 1", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Digital Photography 2", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Photography 1"] },
  { name: "Digital Photography 3", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Photography 2"] },
  { name: "Digital Photography 4", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Photography 3"] },
  { name: "Digital Photography 5", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Photography 4"] },
  { name: "Digital Photography 6", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Photography 5"] },

  { name: "Studio Art", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites:[ [
    "Drawing and Painting 4"], ["Digital Photography 6"], ["Ceramics 4"], 
    ["3D Computer Animation 4"], ["Digital Media Productions 4"], ] 
    },

  { name: "AP Studio Art: Drawing 1", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "AP Studio Art: Drawing 2", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["AP Studio Art: Drawing 1"] },

  { name: "AP Studio Art: 2D 1", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "AP Studio Art: 2D 2", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["AP Studio Art: 2D 1"] },

  { name: "AP Studio Art: 3D 1", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "AP Studio Art: 3D 2", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["AP Studio Art: 3D 1"] },

  { name: "Orchestra 1", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Orchestra 2", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Orchestra 1"] },

  { name: "Chamber Orchestra 1", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Chamber Orchestra 2", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Chamber Orchestra 1"] },

  { name: "Concert Band 1", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Concert Band 2", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Concert Band 1"] },

  { name: "Wind Ensemble 1", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Concert Band 2"] },
  { name: "Wind Ensemble 2", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Wind Ensemble 1"] },

  { name: "Symphonic Band 1", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Symphonic Band 2", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Symphonic Band 1"] },

  { name: "AP Music Theory 1", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "AP Music Theory 2", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["AP Music Theory 1"] },
  { name: "Harmony", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["AP Music Theory 2"] },

  { name: "Tall Flags (Dance Prop)", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },

  { name: "Concert Choir 1", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Concert Choir 2", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Concert Choir 1"] },

  { name: "Classical Vocal Ensemble", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Concert Choir 2"] },

  // --- G - Electives ---

  { name: "AVID 1", grades: [9], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "AVID 2", grades: [9], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID 1"] },
  { name: "AVID 3", grades: [10], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID 2"] },
  { name: "AVID 4", grades: [10], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID 3"] },
  { name: "AVID 5", grades: [11], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID 4"] },
  { name: "AVID 6", grades: [11], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID 5"] },
  { name: "AVID Senior Seminar 1", grades: [12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID 6"] },
  { name: "AVID Senior Seminar 2", grades: [12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID Senior Seminar 1"] },

  { name: "Ethnic Studies 1", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Ethnic Studies 2", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Ethnic Studies 1"] },

  { name: "Business Law 1", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Business Law 2", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Business Law 1"] },

  { name: "Introduction to Finance 1", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Integrated Math 3a", "Integrated Math 3b"] },
  { name: "Introduction to Finance 2", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Introduction to Finance 1"] },

  { name: "Marketing Economics 1", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Marketing Economics 2", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Marketing Economics 1"] },

  { name: "Child Development & Psychology 1", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Child Development & Psychology 2", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Child Development & Psychology 1"] },
  { name: "Child Development & Psychology 3", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Child Development & Psychology 2"] },
  { name: "Child Development & Psychology 4", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Child Development & Psychology 3"] },

  { name: "Robotics 1", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Integrated Math 1a"] },
  { name: "Robotics 2", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Robotics 1"] },

  { name: "Introduction to Engineering Design 1", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Introduction to Engineering Design 2", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Introduction to Engineering Design 1"] },

  { name: "Honors Principles of Engineering 1", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Honors Principles of Engineering 2", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Honors Principles of Engineering 1"] },

  { name: "Computer Science and Software Engineering 1", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Computer Science and Software Engineering 2", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Computer Science and Software Engineering 1"] },

  { name: "AP Computer Science Principles 1", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "AP Computer Science Principles 2", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Computer Science Principles 1"] },

  { name: "Data Structures 1", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Computer Science Principles 1", "AP Computer Science Principles 2"] },

  { name: "AP Computer Science A 1", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Computer Science Principles 1", "AP Computer Science Principles 2"] },
  { name: "AP Computer Science A 2", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Computer Science A 1"] },

  { name: "Data Structures 2", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Computer Science A 1", "AP Computer Science A 2"] },

  { name: "AP Human Geography 1", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Elective", prerequisites: [] },
  { name: "AP Human Geography 2", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Elective", prerequisites: ["AP Human Geography 1"] },
  { name: "AP Human Geography Seminar", grades: [9,10,11,12], ucApproved: false, gradRequirement: "Elective", prerequisites: ["AP Human Geography 1", "AP Human Geography 2"] },

  { name: "AP Psychology 1", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "AP Psychology 2", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Psychology 1"] },

  { name: "Psychology 1", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Psychology 1", "AP Psychology 2"] },

  { name: "Link Crew Leadership 1", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Link Crew Leadership 2", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Link Crew Leadership 1"] },

  { name: "ASB", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },

  { name: "Internship", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },

  { name: "Work Experience 1", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Work Experience 2", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Work Experience 1"] },

  { name: "Yearbook 1", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Yearbook 2", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Yearbook 1"] },

  { name: "Library & Info. Science Teaching Assistant 1", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Library & Info. Science Teaching Assistant 2", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Library & Info. Science Teaching Assistant 1"] },

  { name: "Vocational Learning Assistant", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },

  { name: "Academic Tutor", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },

  { name: "Academic Literacy 1", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Academic Literacy 2", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Academic Literacy 1"] },

  { name: "Academic Success", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },

  { name: "Art Exploration", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },

    // === WORLD LANGUAGES ===
  { name: "Chinese 1", ucArea: "E", gradRequirement: "World Languages", prerequisites: [] },
  { name: "Chinese 2", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 1"] },
  { name: "Chinese 3", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 2"] },
  { name: "Chinese 4", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 3"] },
  { name: "Chinese 5", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 4"] },
  { name: "Chinese 6", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 5"] },
  { name: "Chinese 7", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 6"] },
  { name: "Chinese 8", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 7"] },
  { name: "Chinese 9", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 8"] },
  { name: "AP Chinese Language", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 9"] },
  { name: "AP Chinese Language Seminar", ucArea: null, gradRequirement: "World Languages", prerequisites: ["AP Chinese Language"] },

  { name: "Korean 1", ucArea: "E", gradRequirement: "World Languages", prerequisites: [] },
  { name: "Korean 2", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Korean 1"] },

  { name: "Spanish 1", ucArea: "E", gradRequirement: "World Languages", prerequisites: [] },
  { name: "Spanish 2", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 1"] },
  { name: "Spanish 3", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 2"] },
  { name: "Spanish 4", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 3"] },
  { name: "Spanish 5", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 4"] },
  { name: "Spanish 6", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 5"] },
  { name: "Spanish 7", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 6"] },
  { name: "Spanish 8", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 7"] },
  { name: "AP Spanish Language 1", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 8"] },
  { name: "AP Spanish Language 2", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["AP Spanish Language 1"] },
  { name: "AP Spanish Language Seminar", ucArea: null, gradRequirement: "World Languages", prerequisites: ["AP Spanish Language 2"] },


 
  // --- PE Courses ---
  { name: "ENS 1", grades: [9], ucArea: null, prerequisites: [], gradRequirement: "Health" },
  { name: "ENS 2", grades: [9], ucArea: null, prerequisites: ["ENS 1"], gradRequirement: "Physical Education" },
  { name: "ENS 3", grades: [9], ucArea: null, prerequisites: ["ENS 2"], gradRequirement: "Physical Education" },
  { name: "ENS 4", grades: [10, 11, 12], ucArea: null, prerequisites: ["ENS 3"], gradRequirement: "Physical Education" },
  { name: "Health", grades: [10, 11, 12], ucArea: null, prerequisites: [], gradRequirement: "Health" },
  { name: "Unified PE 1", grades: [10, 11, 12], ucArea: null, prerequisites: [], gradRequirement: "Physical Education" },
  { name: "Unified PE 2", grades: [10, 11, 12], ucArea: null, prerequisites: ["Unified PE 1"], gradRequirement: "Physical Education" },
  { name: "Racquet Sports", grades: [10, 11, 12], ucArea: null, prerequisites: ["ENS 1-3"], gradRequirement: "Physical Education" },
  { name: "Weight Training", grades: [10, 11, 12], ucArea: null, prerequisites: [], gradRequirement: "Physical Education" },
  { name: "Marching PE/Band", grades: [9, 10, 11, 12], ucArea: null, prerequisites: ["Concert Band"], gradRequirement: "Physical Education" },
  { name: "Marching PE/Tall Flags", grades: [9, 10, 11, 12], ucArea: null, prerequisites: ["Tall Flags (Dance Prop) 1-2"], gradRequirement: "Physical Education" },

];





