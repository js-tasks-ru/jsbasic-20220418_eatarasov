


function highlight(table) {

  for (let i = 1; i < table.rows.length; i++) {

    let row = table.rows[i];
    let availableCells = row.cells[3];

    if (availableCells.hasAttribute('data-available')) {
      switch (availableCells.dataset.available) {
        case "true":
          row.classList.add('available');
          break;
        case "false":
          row.classList.add('unavailable');
      }
    } else {
      row.hidden = true;
    }

    let genderCells = row.cells[2].textContent;
    if (genderCells === "m") {
      row.classList.add("male");
    } else {
      row.classList.add("female");
    }

    let ageCells = Number(row.cells[1].textContent);
    if (ageCells < 18) {
      row.style.textDecoration = "line-through";
    }

  }

}

