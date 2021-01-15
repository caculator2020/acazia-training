const carousel = (carousel) => {
  const wrapper = carousel.children[0];
  const dots = carousel.children[1].firstElementChild.children;

  let currentActiveIndex = 0;
  let curretLeft = 0;
  dots[currentActiveIndex].classList.toggle("carousel-dot--active");

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      const swipeLeft = (i - currentActiveIndex) * 375;
      curretLeft = curretLeft - swipeLeft;
      wrapper.style.left = curretLeft + "px";
      dots[currentActiveIndex].classList.toggle("carousel-dot--active");
      dots[i].classList.toggle("carousel-dot--active");
      currentActiveIndex = i;
    });
  }
};

window.onload = () => {
  const carouselItems = document.querySelectorAll(".carousel");
  for (let i = 0; i < carouselItems.length; i++) {
    carousel(carouselItems[i]);
  }
};
