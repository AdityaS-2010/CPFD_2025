console.log("✅ validator.js loaded");

function getCourseFromCatalog(courseName) {
  if (!window.courseCatalog) {
    console.error("❌ No course catalog loaded!");
    return null;
  }

  return window.courseCatalog.find(c => c.name === courseName) || null;
}

function getAllCoursesInPlanner() {
  const rows = document.querySelectorAll("#plannerBody tr");
  let courseNames = [];

  rows.forEach(row => {
    row.querySelectorAll("textarea").forEach(box => {
      const text = box.value.trim();
      if (text !== "" && text !== "Off-Roll") {
        courseNames.push(text);
      }
    });
  });

  return courseNames;
}

function runValidation() {
  runGraduationValidation();
  runUCValidation();
}

function displayValidationResults(ucTally) {
  const ucRequirements = {
    A: 30,
    B: 40,
    C: 30,
    D: 20,
    E: 20,
    F: 10,
    G: 10
  };

  const ucAreaNames = {
    A: "A - History/Social Science",
    B: "B - English",
    C: "C - Mathematics",
    D: "D - Laboratory Science",
    E: "E - Language Other Than English",
    F: "F - Visual and Performing Arts",
    G: "G - College-Preparatory Elective"
  };

  console.log("=== UC CREDIT VALIDATION ===");
  for (let area in ucTally) {
    const credits = ucTally[area];
    const required = ucRequirements[area] || 0;
    const name = ucAreaNames[area] || area;

    if (credits >= required) {
      console.log(`✅ ${name}: ${credits} credits (OK)`);
    } else {
      console.log(`⚠ ${name}: only ${credits} credits → Need ${required}`);
    }
  }
}

function displayGraduationValidationResults(creditTally, requiredCredits) {
  const validationContainer = document.getElementById("graduationValidationResults");
  if (!validationContainer) return;

  let allRequirementsMet = true;
  let resultHTML = `<h3 style="font-family: 'Roboto', sans-serif; margin-bottom: 1rem;">High School Graduation Validation</h3>`;

  Object.keys(requiredCredits).forEach(key => {
    const currentCredits = creditTally[key] || 0;
    const required = requiredCredits[key];
    const met = currentCredits >= required;

    if (!met) {
      allRequirementsMet = false;
      resultHTML += `
        <div style="background: #f8d7da; color: #721c24; padding: 1rem; margin-bottom: 1rem; border-left: 5px solid #f5c6cb; border-radius: 8px; max-width: 300px;">
          <strong>${key}</strong>: ${currentCredits} credits → Need ${required - currentCredits} more
        </div>`;
    }
    
  });

  if (allRequirementsMet) {
    resultHTML += `
      <div style="background: #d4edda; color: #155724; padding: 1rem; border-left: 5px solid #c3e6cb; border-radius: 8px; font-weight: bold; max-width: 300px;">
        ✅ All graduation requirements are fully met!
      </div>`;
  }

  validationContainer.innerHTML = resultHTML;
}

function displayUCValidationResults(ucTally, ucRequirements) {
  const ucContainer = document.getElementById("ucValidationResults");
  if (!ucContainer) return;

  const ucAreaNames = {
    A: "A - History/Social Science",
    B: "B - English",
    C: "C - Mathematics",
    D: "D - Laboratory Science",
    E: "E - Language Other Than English",
    F: "F - Visual and Performing Arts",
    G: "G - College-Prep Elective"
  };

  let allMet = true;
  let resultHTML = `<h3 style="font-family: 'Roboto', sans-serif; margin-bottom: 1rem;">UC/CSU Eligibility Validation</h3>`;

  Object.keys(ucRequirements).forEach(area => {
    const credits = ucTally[area] || 0;
    const required = ucRequirements[area];
    const name = ucAreaNames[area];
    const met = credits >= required;

    if (!met) {
      allMet = false;
      resultHTML += `
        <div style="background: #f8d7da; color: #721c24; padding: 1rem; margin-bottom: 1rem; border-left: 5px solid #f5c6cb; border-radius: 8px; max-width: 300px;">
          <strong>${name}</strong>: ${credits} credits → Need ${required - credits} more
        </div>`;
    }
  });

  if (allMet) {
    resultHTML += `
      <div style="background: #d4edda; color: #155724; padding: 1rem; border-left: 5px solid #c3e6cb; border-radius: 8px; font-weight: bold; max-width: 300px;">
        ✅ All UC/CSU subject requirements are fully met!
      </div>`;
  }

  ucContainer.innerHTML = resultHTML;
}

function runGraduationValidation() {
  const courses = getAllCoursesInPlanner();
  const creditTally = {
    English: 0,
    Math: 0,
    SocialScience: 0,
    WorldHistory: 0,
    USHistory: 0,
    CivicsEconomics: 0,
    Science: 0,
    LifeScience: 0,
    PhysicalScience: 0,
    ForeignLanguage: 0,
    FineArts: 0,
    PhysicalEducation: 0,
    Health: 0,
    Electives: 0,
    TotalCredits: 0
  };

  const requiredCredits = {
    English: 40,
    Math: 20,
    SocialScience: 30,
    WorldHistory: 10,
    USHistory: 10,
    CivicsEconomics: 10,
    Science: 20,
    LifeScience: 10,
    PhysicalScience: 10,
    ForeignLanguage: 10,
    FineArts: 10,
    PhysicalEducation: 20,
    Health: 5,
    Electives: 85,
    TotalCredits: 230
  };

  for (const name of courses) {
    const course = getCourseFromCatalog(name);
    if (!course) {
      console.warn(`⚠ Unknown course: ${name}`);
      continue;
    }

    const credits = course.credits || 5;
    creditTally.TotalCredits += credits;

    switch (course.ucArea) {
      case "B": creditTally.English += credits; break;
      case "C": creditTally.Math += credits; break;
      case "A":
        creditTally.SocialScience += credits;
        if (course.hsRequirement === "World History") creditTally.WorldHistory += credits;
        if (course.hsRequirement === "US History") creditTally.USHistory += credits;
        if (course.hsRequirement === "Civics/Economics") creditTally.CivicsEconomics += credits;
        break;
      case "D":
        creditTally.Science += credits;
        if (course.gradRequirement === "Life Science") creditTally.LifeScience += credits;
        if (course.gradRequirement === "Physical Science") creditTally.PhysicalScience += credits;
        break;
      case "E": creditTally.ForeignLanguage += credits; break;
      case "F": creditTally.FineArts += credits; break;
      case "G": creditTally.Electives += credits; break;
    }

    if (course.gradRequirement === "Physical Education") creditTally.PhysicalEducation += credits;
    if (course.gradRequirement === "Health") creditTally.Health += credits;
  }

  creditTally.Electives += Math.max(0, creditTally.TotalCredits - (
    Math.min(creditTally.English, requiredCredits.English) +
    Math.min(creditTally.Math, requiredCredits.Math) +
    Math.min(creditTally.SocialScience, requiredCredits.SocialScience) +
    Math.min(creditTally.Science, requiredCredits.Science) +
    Math.min(creditTally.ForeignLanguage, requiredCredits.ForeignLanguage) +
    Math.min(creditTally.FineArts, requiredCredits.FineArts) +
    Math.min(creditTally.PhysicalEducation, requiredCredits.PhysicalEducation) +
    Math.min(creditTally.Health, requiredCredits.Health)
  ));

  console.log("=== High School Graduation Validation ===");
  console.table(Object.keys(requiredCredits).map(key => ({
    Category: key,
    CurrentCredits: creditTally[key] || 0,
    RequiredCredits: requiredCredits[key],
    Status: creditTally[key] >= requiredCredits[key] ? "✅" : "✘"
  })));

  displayGraduationValidationResults(creditTally, requiredCredits);
}

function runUCValidation() {
  const courses = getAllCoursesInPlanner();
  const ucTally = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 };
  const ucRequirements = { A: 30, B: 40, C: 30, D: 20, E: 20, F: 10, G: 10 };

  for (const name of courses) {
    const info = getCourseFromCatalog(name);
    if (!info) {
      console.warn(`⚠ Unknown course: ${name}`);
      continue;
    }
    if (info.ucArea) {
      ucTally[info.ucArea] += info.credits || 5;
    }
  }

  displayUCValidationResults(ucTally, ucRequirements);
}

document.querySelector("#plannerBody").addEventListener("input", runValidation);
