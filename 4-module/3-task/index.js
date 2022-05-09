


function highlight(table) {

  // for (let tr of table.children[1].rows) {
  //   let available = tr.cells[3];
  //   console.log(available)
  // }

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
    //console.log(availableCells);

    // for (let j = 0; j < table.rows[i].cells.length; j++) {
    //   let cell = table.rows[i].cells[j];
    //
    //   if (cell.hasAttribute('data-available')) {
    //
    //     if (cell.dataset.available === 'true') {
    //       row.classList.add('available');
    //     } else {
    //       row.classList.add('unavailable');
    //     }
    //   }
    // }
  }

}

