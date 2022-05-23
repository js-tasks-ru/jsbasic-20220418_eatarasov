/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

let rows = [
  {
    name: 'Вася',
    age: 25,
    salary: 1000,
    city: 'Самара'
  },
  {
    name: 'Петя',
    age: 30,
    salary: 1500,
    city: 'Москва'
  },
  {
    name: 'Vova',
    age: 30,
    salary: 1500,
    city: 'Москва'
  }
];


// function renderTable(rows){
//
//   let div = document.createElement("div");
//   let table = document.createElement("table");
//   let thead = document.createElement("thead");
//   let tbody = document.createElement("tbody");
//   thead.innerHTML = `
//     <tr>
//           <th>Имя</th>
//           <th>Возраст</th>
//           <th>Зарплата</th>
//           <th>Город</th>
//           <th></th>
//         </tr>
//   `;
//   table.appendChild(thead);
//   table.appendChild(tbody);
//
//   rows.forEach(item => {
//     let tr = document.createElement("tr");
//     tr.innerHTML = `
//       <td>${item.name}</td>
//       <td>${item.age}</td>
//       <td>${item.salary}</td>
//       <td>${item.city}</td>
//       <td><button>X</button></td>
//     `;
//     tbody.appendChild(tr);
//   });
//
//   div.appendChild(table);
//
//   document.body.appendChild(div);
// }
//
// renderTable(rows);
//document.body.append(renderTable(rows));

export default class UserTable {
  elem;

  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement("table");
    this.renderTable();
  }

  get elem() {
    return this.elem;
  }

  renderTable(){
    this.elem.innerHTML =
                `<thead>
                    <tr>
                        <th>Имя</th>
                       <th>Возраст</th>
                       <th>Зарплата</th>
                       <th>Город</th>
                       <th></th>
                    </tr>
                </thead>
                <tbody>` + this.rows.map(item => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>${item.salary}</td>
                        <td>${item.city}</td>
                        <td><button>X</button></td>
                    </tr>
                `).join("") + `</tbody>`;




    this.elem.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", this.deleteRow);
    });
}

deleteRow(event) {
    let row = event.target.parentElement.parentElement;
    row.remove();
}

}


