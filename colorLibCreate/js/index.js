var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.run();
  this.isDeleting = false;
};

TxtType.prototype.run = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var speed = 200 - Math.random() * 100;

  if (this.isDeleting) {
    speed /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    speed = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    speed = 500;
  }

  setTimeout(() => {
    that.run();
  }, speed);
};
// END TYPE WRITER

// CAROUSEL
var carousel = document.querySelector(".Carousel-list");
var carouselList = document.querySelectorAll(".Carousel-item");
var dot = document.querySelectorAll(".Carousel-dot-item");
var count = 1;
var sizeItem = carouselList[1].offsetWidth;
carousel.style.transform = `translateX(${-sizeItem * count}px)`;

dot.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (i = 0; i <= dot.length - 1; i++) {
      var findActive = dot[i].classList;
      if (findActive.value.includes("active")) {
        dot[i].classList.remove("active");
      }
    }
    count = index + 1;
    carousel.style.transition = "all 0.4s ease 0s";
    carousel.style.transform = `translateX(${-sizeItem * count}px)`;
    item.classList.add("active");
  });
});

// setInterval(() => {
//     count ++;
//     carousel.style.transition = "all 0.4s ease 0s";
//     carousel.style.transform = `translateX(${-sizeItem * count}px)`;
// }, 3000);

var xStart = 0,
  space = 0,
  posInitial,
  xEnd;
carousel.onmousedown = dragStart;

function dragStart(e) {
  e = e || window.event;
  posInitial = -sizeItem * count;
  carousel.style.cursor = "pointer";
  if (e.type == "touchstart") {
    xStart = e.touches[0].clientX;
  } else {
    xStart = e.clientX;
    carousel.onmouseup = dragEnd;
    carousel.onmousemove = dragAction;
  }
}

function dragAction(e) {
  e = e || window.event;
  if (e.type == "touchmove") {
    space = xStart - e.touches[0].clientX;
  } else {
    space = xStart - e.clientX;
  }
  carousel.style.transition = "transform 0.4s ease 0s";
  carousel.style.transform = `translateX(${posInitial - space}px)`;
}

function dragEnd(e) {
  e = e || window.event;
  carousel.style.cursor = "";
  if (e.type == "touchstart") {
    xEnd = e.touches[0].clientX;
  } else {
    xEnd = e.clientX;
  }
  if (xStart > xEnd) {
    carousel.style.transition = "transform 0.4s ease 0s";
    count += 1;
    carousel.style.transform = `translateX(${-sizeItem * count}px)`;
    dot.forEach((item, index) => {
      for (i = 0; i <= dot.length - 1; i++) {
        var findActive = dot[i].classList;
        if (findActive.value.includes("active")) {
          dot[i].classList.remove("active");
        }
        index = count - 1;
        if (index > dot.length - 1) {
          dot[0].classList.add("active");
        } else {
          dot[index].classList.add("active");
        }
      }
    });
  }

  if (xStart < xEnd) {
    carousel.style.transition = "transform 0.4s ease 0s";
    count -= 1;
    carousel.style.transform = `translateX(${-sizeItem * count}px)`;
    dot.forEach((item, index) => {
      for (i = 0; i <= dot.length - 1; i++) {
        var findActive = dot[i].classList;
        if (findActive.value.includes("active")) {
          dot[i].classList.remove("active");
        }
        index = count - 1;
        if (index < 0) {
          dot[dot.length - 1].classList.add("active");
        } else {
          dot[index].classList.add("active");
        }
      }
    });
  }
  carousel.onmouseup = null;
  carousel.onmousemove = null;
}

carousel.addEventListener("transitionend", () => {
  if (carouselList[count].id == "lastClone") {
    carousel.style.transition = "none";
    count = carouselList.length - 2;
    carousel.style.transform = `translateX(${-sizeItem * count}px)`;
  }
  if (carouselList[count].id == "firstClone") {
    carousel.style.transition = "none";
    count = carouselList.length - count;
    carousel.style.transform = `translateX(${-sizeItem * count}px)`;
  }
});
// END CAROUSEL
// STICKY
const sticky = () => {
  const navbar = document.querySelectorAll(".Navbar");
  const header = document.querySelector(".Header");
  window.onscroll = () => {
    for (i = 0; i <= navbar.length; i++) {
      if (typeof navbar[i] != "undefined") {
        if (window.pageYOffset > header.offsetHeight) {
          navbar[i].classList.add("sticky");
        } else {
          navbar[i].classList.remove("sticky");
        }
      }
    }
  };
};
//SMOOTHSCROLL
const smoothScroll = () => {
  const navbarLinks = document.querySelectorAll(".Navbar-link");
  window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + 5;
    navbarLinks.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
};

// TYPE WRITER
const typeWriter = () => {
  const elements = document.getElementsByClassName("typed-words");
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute("data-type");
    const period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};

// VALIDATION
const validation = () => {
  const input = document.querySelectorAll(".validate");
  input.forEach((item, index) => {
    item.addEventListener("blur", () => {
      if (item.value == "") {
        item.nextElementSibling.innerText = "*Required";
        item.nextElementSibling.style.color = "red";
      } else {
        item.nextElementSibling.innerText = "";
      }
    });
  });
};

// SCROLL TOP
const scrollTop = () => {
  const button = document.querySelector(".Started");
  button.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};
//mobileDropdown
const mobileDropdown = () => {
  const dropdownIndicator = document.querySelector("#dropdownIndicator");
  const mobileDropdownList = document.querySelector("#mobileDropdownList");

  const closeButton = document.querySelector("#mobileDropdownCloseBtn");
  const harmburgerBtn = document.querySelector(".Navbar-harmburger");
  const navbarList = document.querySelector(".Navbar-list");

  dropdownIndicator.addEventListener("click", () => {
    dropdownIndicator.classList.toggle("rotate--active");
    mobileDropdownList.classList.toggle("dropdown--active");
  });

  closeButton.addEventListener("click", () => {
    navbarList.classList.toggle("Navbar-list--hide");
  });
  harmburgerBtn.addEventListener("click", () => {
    navbarList.classList.toggle("Navbar-list--hide");
  });
};
window.onload = () => {
  sticky();
  smoothScroll();
  validation();
  scrollTop();
  typeWriter();
  mobileDropdown();
};
