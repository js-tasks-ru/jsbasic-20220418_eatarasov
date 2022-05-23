import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
  }

}

let div = createElement(`
  <div></div>
`);

div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = 'red';

document.body.appendChild(div);