import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem;


  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
  }

  render() {
    let carouselElement = createCaruselElements(this.slides);

    let rightButton = carouselElement.querySelector(".carousel__arrow_right");
    let leftButton = carouselElement.querySelector(".carousel__arrow_left");
    let carouselInner = carouselElement.querySelector(".carousel__inner");
    let carouselSlide = carouselElement.querySelector(".carousel__slide")
    let plusButtons = Array.from(carouselElement.querySelectorAll(".carousel__button"));
    let counter = 1;
    let currentWidth = 0;

    plusButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        let target = event.target;
        let addPlusBtnCustomEvent = new CustomEvent("product-add",
          {
            detail: target.closest('div[data-id]').getAttribute('data-id'),
            bubbles: true
          }
        );
        carouselElement.dispatchEvent(addPlusBtnCustomEvent);
      });
    });

    this.hideButtons(rightButton, leftButton, carouselInner, counter);

    rightButton.addEventListener("click", () => {
      let slideWidth = carouselSlide.offsetWidth;
      counter++;
      this.hideButtons(rightButton, leftButton, carouselInner, counter);
      carouselInner.style.transform = `translateX(-${currentWidth + slideWidth}px)`;
      currentWidth += slideWidth;
    });

    leftButton.addEventListener("click", () => {
      let slideWidth = carouselSlide.offsetWidth;
      counter--;
      this.hideButtons(rightButton, leftButton, carouselInner, counter);
      carouselInner.style.transform = `translateX(-${currentWidth - slideWidth}px)`;
      currentWidth -= slideWidth;
    });

    return carouselElement;
  }

  hideButtons(rightButton, leftButton, carouselInner, counter) {
    rightButton.style.display = (counter === carouselInner.children.length) ? 'none' : '';
    leftButton.style.display = (counter === 1) ? 'none' : '';
  }
}

function createCaruselElements(slides) {
  let element = createElement(`
    <div class="carousel">

        <!--buttons-->
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <!--slide-->
        <div class="carousel__inner">`
    + slides.map(element => `
          <div class="carousel__slide" data-id="${element.id}">
            <img src="/assets/images/carousel/${element.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${element.price.toFixed(2)}</span>
            <div class="carousel__title">${element.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
        `).join("") +

    `</div>
    </div >
    `);

  return element;
};



