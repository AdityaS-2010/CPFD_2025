function fillFineArt() {
  const fineArtTrackElem = document.getElementById("fineArtTrack");
  if (!fineArtTrackElem) return;

  const fineArtTrack = fineArtTrackElem.value;
  if (fineArtTrack === "None") return;

  const plannerRows = document.querySelectorAll("#plannerBody tr");
  if (!plannerRows.length) return;

  // -------------------------------
  // Non-AP Tracks Logic
  // -------------------------------

  const nonAPTracks = {
    "Drawing and Painting": ["Drawing and Painting 1", "Drawing and Painting 2"],
    "Ceramics": ["Ceramics 1", "Ceramics 2"],
    "3D Computer Animation": ["3D Computer Animation 1", "3D Computer Animation 2"],
    "Drama": ["Drama 1", "Drama 2"],
    "Digital Photography": ["Digital Photography 1", "Digital Photography 2"],
    "Digital Media Productions": ["Digital Media Productions 1", "Digital Media Productions 2"],
    "Technical Production for Theater": [
      "Technical Production for Theater 1",
      "Technical Production for Theater 2"
    ]
  };

  if (nonAPTracks[fineArtTrack]) {
    const sequence = nonAPTracks[fineArtTrack];

    // Try 11th first, then 12th
    const gradeIndicesToTry = [2, 3];

    for (let gradeIndex of gradeIndicesToTry) {
      let row = plannerRows[gradeIndex];
      let cells = row.querySelectorAll("td");
      if (!cells.length) continue;

      let placed = 0;

      for (let t = 0; t < 3; t++) {
        if (placed >= sequence.length) break;

        const cell = cells[t];
        const boxes = [...cell.querySelectorAll("textarea")];

        for (const box of boxes) {
          if (box.value.trim() === "") {
            box.value = sequence[placed];
            placed++;
            break;
          }
        }
      }

      if (placed === sequence.length) return;
    }

    return;
  }

  // -------------------------------
  // AP Tracks Logic
  // -------------------------------

  const apTracks = {
    "AP Studio Art: Drawing": ["Studio Art", "AP Studio Art: Drawing 1", "AP Studio Art: Drawing 2"],
    "AP Studio Art: 2D": ["Studio Art", "AP Studio Art: 2D 1", "AP Studio Art: 2D 2"],
    "AP Studio Art: 3D": ["Studio Art", "AP Studio Art: 3D 1", "AP Studio Art: 3D 2"],
    "AP Music Theory": ["AP Music Theory 1", "AP Music Theory 2", "Harmony"]
  };

  if (apTracks[fineArtTrack]) {
    const sequence = apTracks[fineArtTrack];

    const tryGrade = (gradeIndex) => {
      const tds = plannerRows[gradeIndex].querySelectorAll("td");
      if (tds.length < 3) return false;

      const t1Box = [...tds[0].querySelectorAll("textarea")].find(b => b.value.trim() === "");
      const t2Box = [...tds[1].querySelectorAll("textarea")].find(b => b.value.trim() === "");
      const t3Box = [...tds[2].querySelectorAll("textarea")].find(b => b.value.trim() === "");

      if (t1Box && t2Box && t3Box) {
        t1Box.value = sequence[0];
        t2Box.value = sequence[1];
        t3Box.value = sequence[2];
        return true;
      }
      return false;
    };

    if (tryGrade(2)) return;
    if (tryGrade(3)) return;

    alert(`⚠ No space in 11th or 12th grade for ${fineArtTrack}. Please adjust your schedule manually.`);
    return;
  }
}
