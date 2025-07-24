// socialscience.js – Handles Social Science course planning

function fillSocialSciencePathway() {
  const track = document.getElementById("socialScienceTrack").value;
  const planner = document.querySelectorAll("#plannerBody tr");

  if (track === "normal") {
    // Grade 10
    fillNextAvailableBox(planner[1].querySelectorAll("td")[0], "World History 1");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[1], "World History 2");

    // Grade 11
    fillNextAvailableBox(planner[2].querySelectorAll("td")[0], "US History 1");
    fillNextAvailableBox(planner[2].querySelectorAll("td")[1], "US History 2");

    // Grade 12
    fillNextAvailableBox(planner[3].querySelectorAll("td")[0], "Civics");
    fillNextAvailableBox(planner[3].querySelectorAll("td")[1], "Economics");
  }
  else if (track === "ap") {
    // Grade 10
    fillNextAvailableBox(planner[1].querySelectorAll("td")[0], "AP World History 1");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[1], "AP World History 2");
    fillNextAvailableBox(planner[1].querySelectorAll("td")[2], "World Geography & Cultures");

    // Grade 11
    fillNextAvailableBox(planner[2].querySelectorAll("td")[0], "AP US History 1");
    fillNextAvailableBox(planner[2].querySelectorAll("td")[1], "AP US History 2");
    fillNextAvailableBox(planner[2].querySelectorAll("td")[2], "AP US History Seminar");

    // Grade 12
    fillNextAvailableBox(planner[3].querySelectorAll("td")[0], "AP US Government & Politics 1");
    fillNextAvailableBox(planner[3].querySelectorAll("td")[1], "AP US Government & Politics 2");
    fillNextAvailableBox(planner[3].querySelectorAll("td")[2], "AP US Government Seminar");
  }
}
