window.courseCatalog = [

  // --- A - Social Science ---
  { name: "World History 1", courseCode: "001301", grades: [10], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "World History", prerequisites: [] },
  { name: "World History 2", courseCode: "001302", grades: [10], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "World History", prerequisites: ["World History 1"] },

  { name: "AP World History 1", courseCode: "001307", grades: [10], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "World History", prerequisites: [] },
  { name: "AP World History 2", courseCode: "001308", grades: [10], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "World History", prerequisites: ["AP World History 1"] },
  { name: "World Geography & Cultures", courseCode: "001309", grades: [10], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "World History", prerequisites: ["AP World History 1", "AP World History 2"] },

  { name: "US History 1", courseCode: "001376", grades: [11], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "US History", prerequisites: [] },
  { name: "US History 2", courseCode: "001377", grades: [11], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "US History", prerequisites: ["US History 1"] },

  { name: "AP US History 1", courseCode: "001382", grades: [11], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "US History", prerequisites: [] },
  { name: "AP US History 2", courseCode: "001383", grades: [11], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "US History", prerequisites: ["AP US History 1"] },
  { name: "AP US History Seminar", courseCode: "001715", grades: [11], ucApproved: false, gradRequirement: "Social Science", hsRequirement: "US History", prerequisites: ["AP US History 1", "AP US History 2"] },

  { name: "Civics", courseCode: "001393", grades: [12], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "Civics/Economics", prerequisites: ["US History 1", "US History 2"] },
  { name: "Economics", courseCode: "001398", grades: [12], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "Civics/Economics", prerequisites: ["US History 1", "US History 2"] },

  { name: "AP US Government & Politics 1", courseCode: "001395", grades: [12], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "Civics/Economics", prerequisites: [] },
  { name: "AP US Government & Politics 2", courseCode: "001396", grades: [12], ucArea: "A", gradRequirement: "Social Science", hsRequirement: "Civics/Economics", prerequisites: ["AP US Government & Politics 1"] },
  { name: "AP US Government Seminar", courseCode: "001710", grades: [12], ucApproved: false, gradRequirement: "Social Science", hsRequirement: "Civics/Economics", prerequisites: ["AP US Government & Politics 1", "AP US Government & Politics 2"] },



  // --- B - English ---

  { name: "High School English 1", courseCode: "000310", grades: [9], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "High School English 2", courseCode: "000311", grades: [9], ucArea: "B", gradRequirement: "English", prerequisites: ["High School English 1"] },

  { name: "Honors High School English 1", courseCode: "000303", grades: [9], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "Honors High School English 2", courseCode: "000304", grades: [9], ucArea: "B", gradRequirement: "English", prerequisites: ["Honors High School English 1"] },

  { name: "High School English 3", courseCode: "000310", grades: [10], ucArea: "B", gradRequirement: "English", prerequisites: ["High School English 1", "High School English 2"] },
  { name: "High School English 4", courseCode: "000311", grades: [10], ucArea: "B", gradRequirement: "English", prerequisites: ["High School English 3"] },

  { name: "Honors Humanities 1", courseCode: "000313", grades: [10], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "Honors Humanities 2", courseCode: "000314", grades: [10], ucArea: "B", gradRequirement: "English", prerequisites: ["Honors Humanities 1"] },

  { name: "AP English Seminar 1", courseCode: "000374", grades: [10], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "AP English Seminar 2", courseCode: "000375", grades: [10], ucArea: "B", gradRequirement: "English", prerequisites: ["AP English Seminar 1"] },

  { name: "American Literature 1", courseCode: "000387", grades: [11], ucArea: "B", gradRequirement: "English", prerequisites: ["High School English 3", "High School English 4"] },
  { name: "American Literature 2", courseCode: "000388", grades: [11], ucArea: "B", gradRequirement: "English", prerequisites: ["American Literature 1"] },

  { name: "Ethnic Literature 1", courseCode: "000365", grades: [11, 12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "Ethnic Literature 2", courseCode: "000366", grades: [11, 12], ucArea: "B", gradRequirement: "English", prerequisites: ["Ethnic Literature 1"] },

  { name: "Expository Reading & Writing 1", courseCode: "000315", grades: [10, 11, 12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "Expository Reading & Writing 2", courseCode: "000316", grades: [10, 11, 12], ucArea: "B", gradRequirement: "English", prerequisites: ["Expository Reading & Writing 1"] },

  { name: "World Literature 1", courseCode: "000393", grades: [12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "World Literature 2", courseCode: "000394", grades: [12], ucArea: "B", gradRequirement: "English", prerequisites: ["World Literature 1"] },

  { name: "AP English Language 1", courseCode: "000372", grades: [11, 12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "AP English Language 2", courseCode: "000373", grades: [11, 12], ucArea: "B", gradRequirement: "English", prerequisites: ["AP English Language 1"] },
  { name: "AP English Language Seminar", courseCode: "001702", grades: [11, 12], ucApproved: false, gradRequirement: "English", prerequisites: ["AP English Language 1", "AP English Language 2"] },

  { name: "AP English Literature 1", courseCode: "000370", grades: [11, 12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "AP English Literature 2", courseCode: "000371", grades: [11, 12], ucArea: "B", gradRequirement: "English", prerequisites: ["AP English Literature 1"] },
  { name: "AP English Literature Seminar", courseCode: "001703", grades: [11, 12], ucApproved: false, gradRequirement: "English", prerequisites: ["AP English Literature 1", "AP English Literature 2"] },

  // --- C - Mathematics ---

  { name: "Math Accel 1", courseCode: "001022", grades: [9,10,11,12], ucApproved: false, gradRequirement: "Mathematics", prerequisites: [] },
  { name: "Math Accel 2", courseCode: "001023", grades: [9,10,11,12], ucApproved: false, gradRequirement: "Mathematics", prerequisites: ["Math Accel 1"] },

  { name: "Integrated Math 1a", courseCode: "001012", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: [] },
  { name: "Integrated Math 1b", courseCode: "001013", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 1a"] },

  { name: "Integrated Math 2a", courseCode: "001016", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Integrated Math 2b", courseCode: "001017", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 2a"] },

  { name: "Integrated Math 3a", courseCode: "001018", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 2a", "Integrated Math 2b"] },
  { name: "Integrated Math 3b", courseCode: "001019", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 3a"] },

  { name: "Trigonometry", courseCode: "001037", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 2a", "Integrated Math 2b"] },

  { name: "College Algebra 1", courseCode: "001054", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 3a", "Integrated Math 3b"] },
  { name: "College Algebra 2", courseCode: "001055", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["College Algebra 1"] },

  { name: "Pre-Calc 1", courseCode: "001046", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 3a", "Integrated Math 3b"] },
  { name: "Pre-Calc 2", courseCode: "001047", grades: [9,10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Pre-Calc 1"] },

  { name: "AP Calculus AB 1", courseCode: "001060", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Pre-Calc 1"] },
  { name: "AP Calculus AB 2", courseCode: "001061", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["AP Calculus AB 1"] },

  { name: "Bridge to AP Calculus BC", courseCode: "001704", grades: [10,11,12], ucApproved: false, gradRequirement: "Mathematics", prerequisites: ["AP Calculus AB 1", "AP Calculus AB 2"] },

  { name: "AP Calculus BC 1", courseCode: "001062", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["AP Calculus AB 1", "AP Calculus AB 2"] },
  { name: "AP Calculus BC 2", courseCode: "001063", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["AP Calculus BC 1"] },

  { name: "AP Statistics 1", courseCode: "001064", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["Integrated Math 3a", "Integrated Math 3b"] },
  { name: "AP Statistics 2", courseCode: "001065", grades: [10,11,12], ucArea: "C", gradRequirement: "Mathematics", prerequisites: ["AP Statistics 1"] },
  { name: "AP Statistics Seminar", courseCode: "001706", grades: [10,11,12], ucApproved: false, gradRequirement: "Mathematics", prerequisites: ["AP Statistics 1", "AP Statistics 2"] },

  // --- D - Sciences ---
    

  { name: "Biology of the Living Earth 1", courseCode: "001236", grades: [9,10], ucArea: "D", gradRequirement: "Life Science", prerequisites: [] },
  { name: "Biology of the Living Earth 2", courseCode: "001237", grades: [9,10], ucArea: "D", gradRequirement: "Life Science", prerequisites: ["Biology of the Living Earth 1"] },

  { name: "AP Biology 3", courseCode: "001232", grades: [10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: [] },
  { name: "AP Biology 4", courseCode: "001233", grades: [10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: ["AP Biology 3"] },
  { name: "AP Biology Seminar", courseCode: "001714", grades: [10,11,12], ucApproved: false, gradRequirement: "Life Science", prerequisites: ["AP Biology 3", "AP Biology 4"] },

  { name: "Principles of Biomedical Sciences 1", courseCode: "000880", grades: [9,10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: [] },
  { name: "Principles of Biomedical Sciences 2", courseCode: "000881", grades: [9,10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: ["Principles of Biomedical Sciences 1"] },

  { name: "Human Body Systems 1", courseCode: "000912", grades: [10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: [] },
  { name: "Human Body Systems 2", courseCode: "000913", grades: [10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: ["Human Body Systems 1"] },

  { name: "Honors Medical Interventions 1", courseCode: "001275", grades: [11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: [ ["Principles of Biomedical Sciences 1", "Principles of Biomedical Sciences 2", "Human Body Systems 1", "Human Body Systems 2"], ["AP Biology 3", "AP Biology 4", "AP Biology Seminar"], ] },
  { name: "Honors Medical Interventions 2", courseCode: "001276", grades: [11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: ["Honors Medical Interventions 1"] },

  { name: "Fundamentals of Physics & Chemistry 1", courseCode: "001214", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Fundamentals of Physics & Chemistry 2", courseCode: "001215", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Fundamentals of Physics & Chemistry 1"] },

  { name: "Chemistry in the Earth System 1", courseCode: "001246", grades: [9,10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Chemistry in the Earth System 2", courseCode: "001247", grades: [9,10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Chemistry in the Earth System 1"] },

  { name: "Physics of the Universe 1", courseCode: "001248", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Physics of the Universe 2", courseCode: "001249", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Physics of the Universe 1"] },

  { name: "Marine Science 1", courseCode: "001256", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Marine Science 2", courseCode: "001257", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["Marine Science 1"] },

  { name: "AP Chemistry 3", courseCode: "001242", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: [] },
  { name: "AP Chemistry 4", courseCode: "001243", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["AP Chemistry 3"] },
  { name: "AP Chemistry Seminar", courseCode: "001716", grades: [10,11,12], ucApproved: false, gradRequirement: "Physical Science", prerequisites: ["AP Chemistry 3", "AP Chemistry 4"] },

  { name: "AP Environmental Science 1", courseCode: "001244", grades: [10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: [] },
  { name: "AP Environmental Science 2", courseCode: "001245", grades: [10,11,12], ucArea: "D", gradRequirement: "Life Science", prerequisites: ["AP Environmental Science 1"] },
  { name: "AP Environmental Science Seminar", courseCode: "001713", grades: [10,11,12], ucApproved: false, gradRequirement: "Life Science", prerequisites: ["AP Environmental Science 1", "AP Environmental Science 2"] },

  { name: "AP Physics C: Mechanics 1a", courseCode: "001262", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["AP Calculus AB 1"] },
  { name: "AP Physics C: Mechanics 1b", courseCode: "001263", grades: [10,11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["AP Physics C: Mechanics 1a"] },
  { name: "AP Physics C: Mechanics Seminar", courseCode: "001708", grades: [10,11,12], ucApproved: false, gradRequirement: "Physical Science", prerequisites: ["AP Physics C: Mechanics 1a", "AP Physics C: Mechanics 1b"] },

  { name: "AP Physics C: Electricity & Magnetism 1", courseCode: "001264", grades: [11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["AP Physics C: Mechanics 1a", "AP Physics C: Mechanics 1b"] },
  { name: "AP Physics C: Electricity & Magnetism 2", courseCode: "001265", grades: [11,12], ucArea: "D", gradRequirement: "Physical Science", prerequisites: ["AP Physics C: Electricity & Magnetism 1"] },
  { name: "AP Physics C: Electricity & Magnetism Seminar", courseCode: "001707", grades: [11,12], ucApproved: false, gradRequirement: "Physical Science", prerequisites: ["AP Physics C: Electricity & Magnetism 1", "AP Physics C: Electricity & Magnetism 2"] },

  // --- F - Fine Arts ---

  { name: "Drawing and Painting 1", courseCode: "000132", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Drawing and Painting 2", courseCode: "000133", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drawing and Painting 1"] },
  { name: "Drawing and Painting 3", courseCode: "000132", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drawing and Painting 2"] },
  { name: "Drawing and Painting 4", courseCode: "000133", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drawing and Painting 3"] },

  { name: "3D Computer Animation 1", courseCode: "000859", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "3D Computer Animation 2", courseCode: "000860", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["3D Computer Animation 1"] },
  { name: "3D Computer Animation 3", courseCode: "000859", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["3D Computer Animation 2"] },
  { name: "3D Computer Animation 4", courseCode: "000860", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["3D Computer Animation 3"] },

  { name: "Art of Game Design 1", courseCode: "000752", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["3D Computer Animation 1"] },
  { name: "Art of Game Design 2", courseCode: "000753", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Art of Game Design 1"] },

  { name: "Ceramics 1", courseCode: "000117", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Ceramics 2", courseCode: "000118", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Ceramics 1"] },
  { name: "Ceramics 3", courseCode: "000117", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Ceramics 2"] },
  { name: "Ceramics 4", courseCode: "000118", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Ceramics 3"] },

  { name: "Design Mixed Media 1", courseCode: "000125", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Design Mixed Media 2", courseCode: "000126", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Design Mixed Media 1"] },

  { name: "Digital Media Productions 1", courseCode: "000996", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Digital Media Productions 2", courseCode: "000997", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Media Productions 1"] },
  { name: "Digital Media Productions 3", courseCode: "000996", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Media Productions 2"] },
  { name: "Digital Media Productions 4", courseCode: "000997", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Media Productions 3"] },

  { name: "Drama 1", courseCode: "000349", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Drama 2", courseCode: "000350", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drama 1"] },
  { name: "Drama 3", courseCode: "000349", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drama 2"] },
  { name: "Drama 4", courseCode: "000350", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drama 3"] },
  { name: "Drama 5", courseCode: "000349", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drama 4"] },
  { name: "Drama 6", courseCode: "000350", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drama 5"] },
  { name: "Theater Study 7", courseCode: "000351", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Drama 6"] },
  { name: "Theater Study 8", courseCode: "000352", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Theater Study 7"] },

  { name: "Technical Production for Theater 1", courseCode: "000342", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Technical Production for Theater 2", courseCode: "000343", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Technical Production for Theater 1"] },
  { name: "Technical Production for Theater 3", courseCode: "000342", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Technical Production for Theater 2"] },
  { name: "Technical Production for Theater 4", courseCode: "000343", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Technical Production for Theater 3"] },

  { name: "Digital Photography 1", courseCode: "001092", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Digital Photography 2", courseCode: "001093", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Photography 1"] },
  { name: "Digital Photography 3", courseCode: "001092", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Photography 2"] },
  { name: "Digital Photography 4", courseCode: "001093", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Photography 3"] },
  { name: "Digital Photography 5", courseCode: "001092", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Photography 4"] },
  { name: "Digital Photography 6", courseCode: "001093", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Digital Photography 5"] },

  { name: "Studio Art", courseCode: "000150", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites:[ [
    "Drawing and Painting 4"], ["Digital Photography 6"], ["Ceramics 4"], 
    ["3D Computer Animation 4"], ["Digital Media Productions 4"], ] 
    },

  { name: "AP Studio Art: Drawing 1", courseCode: "000151", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "AP Studio Art: Drawing 2", courseCode: "000152", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["AP Studio Art: Drawing 1"] },

  { name: "AP Studio Art: 2D 1", courseCode: "000157", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "AP Studio Art: 2D 2", courseCode: "000158", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["AP Studio Art: 2D 1"] },

  { name: "AP Studio Art: 3D 1", courseCode: "000159", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "AP Studio Art: 3D 2", courseCode: "000160", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["AP Studio Art: 3D 1"] },

  { name: "Orchestra 1", courseCode: "001183", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Orchestra 2", courseCode: "001184", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Orchestra 1"] },

  { name: "Chamber Orchestra 1", courseCode: "001188", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Chamber Orchestra 2", courseCode: "001189", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Chamber Orchestra 1"] },

  { name: "Concert Band 1", courseCode: "001175", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Concert Band 2", courseCode: "001176", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Concert Band 1"] },

  { name: "Wind Ensemble 1", courseCode: "001177", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Concert Band 2"] },
  { name: "Wind Ensemble 2", courseCode: "001178", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Wind Ensemble 1"] },

  { name: "Symphonic Band 1", courseCode: "001190", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Symphonic Band 2", courseCode: "001191", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Symphonic Band 1"] },

  { name: "AP Music Theory 1", courseCode: "001160", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "AP Music Theory 2", courseCode: "001161", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["AP Music Theory 1"] },
  { name: "Harmony", courseCode: "001146", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["AP Music Theory 2"] },

  { name: "Tall Flags (Dance Prop)", courseCode: "001195", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },

  { name: "Concert Choir 1", courseCode: "001120", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: [] },
  { name: "Concert Choir 2", courseCode: "001121", grades: [9,10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Concert Choir 1"] },

  { name: "Classical Vocal Ensemble", courseCode: "001110", grades: [10,11,12], ucArea: "F", gradRequirement: "Fine Arts", prerequisites: ["Concert Choir 2"] },

  // --- G - Electives ---

  { name: "AVID 1", courseCode: "001605", grades: [9], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "AVID 2", courseCode: "001606", grades: [9], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID 1"] },
  { name: "AVID 3", courseCode: "001605", grades: [10], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID 2"] },
  { name: "AVID 4", courseCode: "001606", grades: [10], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID 3"] },
  { name: "AVID 5", courseCode: "001605", grades: [11], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID 4"] },
  { name: "AVID 6", courseCode: "001606", grades: [11], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID 5"] },
  { name: "AVID Senior Seminar 1", courseCode: "001609", grades: [12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID 6"] },
  { name: "AVID Senior Seminar 2", courseCode: "001610", grades: [12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AVID Senior Seminar 1"] },

  { name: "Ethnic Studies 1", courseCode: "001348", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Ethnic Studies 2", courseCode: "001349", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Ethnic Studies 1"] },

  { name: "Business Law 1", courseCode: "000189", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Business Law 2", courseCode: "000190", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Business Law 1"] },

  { name: "Introduction to Finance 1", courseCode: "000217", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Integrated Math 3a", "Integrated Math 3b"] },
  { name: "Introduction to Finance 2", courseCode: "000218", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Introduction to Finance 1"] },

  { name: "Marketing Economics 1", courseCode: "000985", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Marketing Economics 2", courseCode: "000986", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Marketing Economics 1"] },

  { name: "Child Development & Psychology 1", courseCode: "000934", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Child Development & Psychology 2", courseCode: "000935", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Child Development & Psychology 1"] },
  { name: "Child Development & Psychology 3", courseCode: "000934", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Child Development & Psychology 2"] },
  { name: "Child Development & Psychology 4", courseCode: "000935", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Child Development & Psychology 3"] },

  { name: "Robotics 1", courseCode: "000914", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Integrated Math 1a"] },
  { name: "Robotics 2", courseCode: "000915", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Robotics 1"] },

  { name: "Introduction to Engineering Design 1", courseCode: "000854", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Introduction to Engineering Design 2", courseCode: "000855", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Introduction to Engineering Design 1"] },

  { name: "Honors Principles of Engineering 1", courseCode: "000840", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Integrated Math 1a", "Integrated Math 1b"] },
  { name: "Honors Principles of Engineering 2", courseCode: "000841", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Honors Principles of Engineering 1"] },

  { name: "Computer Science and Software Engineering 1", courseCode: "000971", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Computer Science and Software Engineering 2", courseCode: "000972", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Computer Science and Software Engineering 1"] },

  { name: "AP Computer Science Principles 1", courseCode: "001258", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "AP Computer Science Principles 2", courseCode: "001259", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Computer Science Principles 1"] },

  { name: "Data Structures 1", courseCode: "001073", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Computer Science Principles 1", "AP Computer Science Principles 2"] },

  { name: "AP Computer Science A 1", courseCode: "001070", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Computer Science Principles 1", "AP Computer Science Principles 2"] },
  { name: "AP Computer Science A 2", courseCode: "001071", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Computer Science A 1"] },

  { name: "Data Structures 2", courseCode: "001073", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Computer Science A 1", "AP Computer Science A 2"] },

  { name: "AP Human Geography 1", courseCode: "001312", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Elective", prerequisites: [] },
  { name: "AP Human Geography 2", courseCode: "001313", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Elective", prerequisites: ["AP Human Geography 1"] },
  { name: "AP Human Geography Seminar", courseCode: "001315", grades: [9,10,11,12], ucApproved: false, gradRequirement: "Elective", prerequisites: ["AP Human Geography 1", "AP Human Geography 2"] },

  { name: "AP Psychology 1", courseCode: "001327", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "AP Psychology 2", courseCode: "001328", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Psychology 1"] },

  { name: "Psychology 1", courseCode: "001323", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["AP Psychology 1", "AP Psychology 2"] },

  { name: "Link Crew Leadership 1", courseCode: "001884", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Link Crew Leadership 2", courseCode: "001885", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Link Crew Leadership 1"] },

  { name: "ASB", courseCode: "001886", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },

  { name: "Internship", courseCode: "001650", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },

  { name: "Work Experience 1", courseCode: "001817", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Work Experience 2", courseCode: "001818", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Work Experience 1"] },

  { name: "Yearbook 1", courseCode: "001632", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Yearbook 2", courseCode: "001633", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Yearbook 1"] },

  { name: "Library & Info. Science Teaching Assistant 1", courseCode: "001842", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Library & Info. Science Teaching Assistant 2", courseCode: "001843", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Library & Info. Science Teaching Assistant 1"] },

  { name: "Vocational Learning Assistant", courseCode: "001830", grades: [10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },

  { name: "Academic Tutor", courseCode: "001864", grades: [11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },

  { name: "Academic Literacy 1", courseCode: "001857", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },
  { name: "Academic Literacy 2", courseCode: "001858", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: ["Academic Literacy 1"] },

  { name: "Academic Success", courseCode: "225808", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },

  { name: "Art Exploration", courseCode: "000105", grades: [9,10,11,12], ucArea: "G", gradRequirement: "Electives", prerequisites: [] },

    // === WORLD LANGUAGES ===
  { name: "Chinese 1", courseCode: "000438", ucArea: "E", gradRequirement: "World Languages", prerequisites: [] },
  { name: "Chinese 2", courseCode: "000438", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 1"] },
  { name: "Chinese 3", courseCode: "000438", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 2"] },
  { name: "Chinese 4", courseCode: "000438", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 3"] },
  { name: "Chinese 5", courseCode: "000438", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 4"] },
  { name: "Chinese 6", courseCode: "000438", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 5"] },
  { name: "Chinese 7", courseCode: "000438", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 6"] },
  { name: "Chinese 8", courseCode: "000438", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 7"] },
  { name: "Chinese 9", courseCode: "000438", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 8"] },
  { name: "AP Chinese Language", courseCode: "000478", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Chinese 9"] },
  { name: "AP Chinese Language Seminar", courseCode: "000480", ucArea: null, gradRequirement: "World Languages", prerequisites: ["AP Chinese Language"] },

  { name: "Korean 1", courseCode: "000506", ucArea: "E", gradRequirement: "World Languages", prerequisites: [] },
  { name: "Korean 2", courseCode: "000507", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Korean 1"] },

  { name: "Spanish 1", courseCode: "000476", ucArea: "E", gradRequirement: "World Languages", prerequisites: [] },
  { name: "Spanish 2", courseCode: "000477", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 1"] },
  { name: "Spanish 3", courseCode: "000476", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 2"] },
  { name: "Spanish 4", courseCode: "000477", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 3"] },
  { name: "Spanish 5", courseCode: "000476", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 4"] },
  { name: "Spanish 6", courseCode: "000477", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 5"] },
  { name: "Spanish 7", courseCode: "000476", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 6"] },
  { name: "Spanish 8", courseCode: "000477", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 7"] },
  { name: "AP Spanish Language 1", courseCode: "000484", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["Spanish 8"] },
  { name: "AP Spanish Language 2", courseCode: "000485", ucArea: "E", gradRequirement: "World Languages", prerequisites: ["AP Spanish Language 1"] },
  { name: "AP Spanish Language Seminar", courseCode: "001712", ucArea: null, gradRequirement: "World Languages", prerequisites: ["AP Spanish Language 2"] },


 
  // --- PE Courses ---
  { name: "ENS 1", courseCode: "001407", grades: [9], ucArea: null, prerequisites: [], gradRequirement: "Health" },
  { name: "ENS 2", courseCode: "001407", grades: [9], ucArea: null, prerequisites: ["ENS 1"], gradRequirement: "Physical Education" },
  { name: "ENS 3", courseCode: "001407", grades: [9], ucArea: null, prerequisites: ["ENS 2"], gradRequirement: "Physical Education" },
  { name: "ENS 4", courseCode: "001407", grades: [10, 11, 12], ucArea: null, prerequisites: ["ENS 3"], gradRequirement: "Physical Education" },
  { name: "Health", courseCode: "000515", grades: [10, 11, 12], ucArea: null, prerequisites: [], gradRequirement: "Health" },
  { name: "Unified PE 1", courseCode: "001438", grades: [10, 11, 12], ucArea: null, prerequisites: [], gradRequirement: "Physical Education" },
  { name: "Unified PE 2", courseCode: "001439", grades: [10, 11, 12], ucArea: null, prerequisites: ["Unified PE 1"], gradRequirement: "Physical Education" },
  { name: "Racquet Sports", courseCode: "001420", grades: [10, 11, 12], ucArea: null, prerequisites: ["ENS 1-3"], gradRequirement: "Physical Education" },
  { name: "Weight Training", courseCode: "001493", grades: [10, 11, 12], ucArea: null, prerequisites: [], gradRequirement: "Physical Education" },
  { name: "Marching PE/Band", courseCode: "001198", grades: [9, 10, 11, 12], ucArea: null, prerequisites: ["Concert Band"], gradRequirement: "Physical Education" },
  { name: "Marching PE/Tall Flags", courseCode: "001199", grades: [9, 10, 11, 12], ucArea: null, prerequisites: ["Tall Flags (Dance Prop) 1-2"], gradRequirement: "Physical Education" },

];

// --- Special Education & ELD (added from Course Catalog) ---
// Keep only Special Education (L/) sequences and ELD entries here —
// all other regular courses are maintained above in their UC sections.
window.courseCatalog.push(
  // L/ - Special Education sequences (courseCode from Course Catalog)
  { name: "L/Vocational Domain Skills 1", courseCode: "001910", grades: [9], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Vocational Domain Skills 2", courseCode: "001911", grades: [9], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Vocational Domain Skills 3", courseCode: "001912", grades: [10], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Vocational Domain Skills 4", courseCode: "001913", grades: [10], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Vocational Domain Skills 5", courseCode: "001914", grades: [11], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Vocational Domain Skills 6", courseCode: "001915", grades: [11], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Vocational Domain Skills 7", courseCode: "001916", grades: [12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Vocational Domain Skills 8", courseCode: "001917", grades: [12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },

  { name: "L/Domestic Domain Skills 1", courseCode: "001918", grades: [9,10], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Domestic Domain Skills 2", courseCode: "001919", grades: [9,10], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Domestic Domain Skills 3", courseCode: "001920", grades: [10], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Domestic Domain Skills 4", courseCode: "001921", grades: [10], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Domestic Domain Skills 5", courseCode: "001922", grades: [11], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Domestic Domain Skills 6", courseCode: "001923", grades: [11], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Domestic Domain Skills 7", courseCode: "001924", grades: [12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Domestic Domain Skills 8", courseCode: "001925", grades: [12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },

  { name: "L/Community Domain Skills 1", courseCode: "001926", grades: [9], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Community Domain Skills 2", courseCode: "001927", grades: [9], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Community Domain Skills 3", courseCode: "001928", grades: [10], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Community Domain Skills 4", courseCode: "001929", grades: [10], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Community Domain Skills 5", courseCode: "001930", grades: [11], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Community Domain Skills 6", courseCode: "001931", grades: [11], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Community Domain Skills 7", courseCode: "001932", grades: [12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Community Domain Skills 8", courseCode: "001933", grades: [12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },

  { name: "L/Reading Skills 1", courseCode: "002014", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Reading Skills 2", courseCode: "002015", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Reading Skills 3", courseCode: "002016", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Reading Skills 4", courseCode: "002017", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Reading Skills 5", courseCode: "002094", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Reading Skills 6", courseCode: "002095", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Reading Skills 7", courseCode: "002096", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Reading Skills 8", courseCode: "002097", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },

  { name: "L/English 1", courseCode: "002020", grades: [9], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/English 2", courseCode: "002021", grades: [9], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/English 3", courseCode: "002022", grades: [10], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/English 4", courseCode: "002023", grades: [10], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/English 5", courseCode: "002024", grades: [11], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/English 6", courseCode: "002025", grades: [11], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/English 7", courseCode: "002026", grades: [12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/English 8", courseCode: "002027", grades: [12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },

  { name: "L/World History 1", courseCode: "002048", grades: [10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/World History 2", courseCode: "002049", grades: [10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/US History 1", courseCode: "002050", grades: [11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/US History 2", courseCode: "002051", grades: [11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Civics", courseCode: "002052", grades: [12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Economics", courseCode: "002054", grades: [12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Learning Strategies 1", courseCode: "002062", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Learning Strategies 2", courseCode: "002063", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Biology 1", courseCode: "002072", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Biology 2", courseCode: "002073", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Marine Science 1", courseCode: "002068", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },
  { name: "L/Marine Science 2", courseCode: "002069", grades: [9,10,11,12], ucArea: null, gradRequirement: "Special Education", prerequisites: ["IEP"] },

  // ELD / English Learners (courseCode where listed in Course Catalog)
  { name: "ELD 1", grades: [9,10,11,12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "ELD 2", grades: [9,10,11,12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "ELD 3", grades: [9,10,11,12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "ELD 4", grades: [9,10,11,12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "High School English 1 Sheltered", grades: [9,10,11,12], ucArea: "B", gradRequirement: "English", prerequisites: [] },
  { name: "ELD Math 1", courseCode: "001004", grades: [9,10,11,12], ucArea: null, gradRequirement: "Mathematics", prerequisites: [] },
  { name: "ELD Math 2", courseCode: "001005", grades: [9,10,11,12], ucArea: null, gradRequirement: "Mathematics", prerequisites: [] },
  { name: "ELD Explorations A/B 1", courseCode: "000335", grades: [9,10,11,12], ucArea: null, gradRequirement: "Electives", prerequisites: [] },
  { name: "ELD Explorations A/B 2", courseCode: "000336", grades: [9,10,11,12], ucArea: null, gradRequirement: "Electives", prerequisites: [] },
  { name: "ELD Social Science 1", courseCode: "001318", grades: [9,10,11,12], ucArea: null, gradRequirement: "Social Science", prerequisites: [] },
  { name: "ELD Social Science 2", courseCode: "001319", grades: [9,10,11,12], ucArea: null, gradRequirement: "Social Science", prerequisites: [] }
);





