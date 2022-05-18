function initCarousel() {
  let rightButton = document.querySelector(".carousel__arrow_right");
  let leftButton = document.querySelector(".carousel__arrow_left");
  let slidesFrame = document.querySelector(".carousel__inner");
  let slidesArrayLength = document.querySelectorAll(".carousel__slide").length;

  let counter = 1;
  let slideWidth = 988;
  let position = 0;

  rightButton.addEventListener("click", function () {
    counter++;
    position += slideWidth * -1;
    setPosition();
    console.log(position);
    checkButton();
  });

  leftButton.addEventListener("click", function () {
    counter--;
    position += slideWidth;
    setPosition();
    console.log(position);
    checkButton();
  });

  checkButton();

  function setPosition() {
    slidesFrame.style.transform = `translateX(${position}px)`;
  }

  function checkButton() {
    rightButton.style.display = (counter === slidesArrayLength) ? 'none' : '';
    leftButton.style.display = (counter === 1) ? 'none' : '';
  };
}
