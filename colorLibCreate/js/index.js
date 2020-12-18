var TypingCarousel = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TypingCarousel.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 130 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

showAndHideNavMenu = () => {
  barsButton = document.getElementsByClassName("navbar-barsButton")[0]; // hamburger button to expand nav menu on mobile devices
  closeButton = document.getElementsByClassName("navbar-menu-item")[0]
    .firstChild; //i.fas.fa-times
  navbarMenu = document.getElementsByClassName("navbar-menu")[0]; //nav menu
  barsButton.addEventListener("click", () => {
    navbarMenu.style.right = "0%";
  });
  closeButton.addEventListener("click", () => {
    navbarMenu.style.right = "-70%";
  });
};
scrollSpy = () => {
  var section = document.querySelectorAll("section");
  var sections = {};
  Array.prototype.forEach.call(section, function (el) {
    if (el.id) {
      sections[el.id] = el.offsetTop;
    }
  });
  window.onscroll = () => {
    let scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    for (prop in sections) {
      if (sections[prop] - scrollPosition <= 200) {
        //remove current active menu item
        let activeEle = document.querySelector(".navbar-menu-item--active");
        activeEle.className = activeEle.className.replace(
          "navbar-menu-item--active",
          ""
        );

        //add active to new menu item
        let newActiveEle = document.querySelector("a[href*=" + prop + "]")
          .parentElement;
        newActiveEle.className =
          newActiveEle.className + " navbar-menu-item--active";
      }
    }
    //navbarEffectOnscroll
    const navbar = document.querySelector(".navbar");
    const contact = document.querySelector(".contact");
    if (contact.offsetHeight - navbar.offsetTop == 0) {
      navbar.style.paddingTop = "24px";
      navbar.style.paddingBottom = "24px";
    } else {
      navbar.style.paddingTop = "10px";
      navbar.style.paddingBottom = "10px";
    }
  };
};
showAndHideSubMenu = () => {
  const triggerBtn = document.querySelector(".navbar-menu-item-aboutChevron");
  const subMenu = document.querySelector(".navbar-menu-item-subMenu");
  let hide = true;
  triggerBtn.addEventListener("click", () => {
    if (hide) {
      triggerBtn.style.transform = "rotate(-180deg)";
      triggerBtn.style.color = "#32dbc6";
      subMenu.style.display = "block";
      hide = false;
    } else {
      triggerBtn.style.transform = "rotate(0deg)";
      triggerBtn.style.color = "#212529";
      subMenu.style.display = "none";
      hide = true;
    }
  });
};
carousel = () => {
  let currentActiveIndex = 0;
  const indicators = [
    ...document.querySelector(".testimonial-indicator").children,
  ];
  const slider = document.querySelector(".testimonial-slider");
  const slideItemWidth = document.querySelector(
    ".testimonial-slider-slides-item"
  ).offsetWidth;

  indicators.map((item, index) => {
    item.addEventListener("click", () => {
      //swipe slider horizontally
      const swipeDirection = index - currentActiveIndex; // positive: right, nagative:left
      slider.scrollBy(swipeDirection * slideItemWidth, 0);
      //remove current active indicator
      indicators[currentActiveIndex].className = indicators[
        currentActiveIndex
      ].className.replace("active", "");
      //add active to clicked indicator
      item.className = "active";
      //update current active indicator index
      currentActiveIndex = index;
    });
  });
};
typingEffect = () => {
  var element = document.querySelector(".txt-rotate");
  var toRotate = element.getAttribute("data-rotate");
  var period = element.getAttribute("data-period");
  new TypingCarousel(element, JSON.parse(toRotate), period);
};
navbarEffectOnscroll = () => {
  window.onscroll = () => {
    const navbar = document.querySelector(".navbar");
    const contact = document.querySelector(".contact");
    if (contact.offsetHeight - navbar.offsetTop == 0) {
      navbar.style.paddingTop = "24px";
      navbar.style.paddingBottom = "24px";
    } else {
      navbar.style.paddingTop = "10px";
      navbar.style.paddingBottom = "10px";
    }
  };
};
window.onload = () => {
  showAndHideNavMenu();
  navbarEffectOnscroll(); // window.onscroll is overwritten by scrollBy. How can i solve this issue?
  scrollSpy();
  showAndHideSubMenu();
  carousel();
  typingEffect();
};
