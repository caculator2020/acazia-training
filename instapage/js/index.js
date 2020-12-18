/** Slide */
function slide(items, prev, next) {
  for (let i = 0; i < items.children.length; i++) {
    items.children[i].classList.add("slide");
  }
  var posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 200,
    slides = items.getElementsByClassName("slide"),
    slideSize,
    firstSlide = slides[0],
    slidesLength = slides.length,
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;

  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  items.style.width = items.children.length + "00%";
  slideSize = items.children[0].offsetWidth;

  window.addEventListener("resize", () => {
    slideSize = items.children[0].offsetWidth;
  });
  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener("touchstart", dragStart);
  items.addEventListener("touchend", dragEnd);
  items.addEventListener("touchmove", dragAction);

  // Click events
  prev.addEventListener("click", function () {
    shiftSlide(-1);
  });
  next.addEventListener("click", function () {
    shiftSlide(1);
  });

  // Transition events
  items.addEventListener("transitionend", checkIndex);

  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;

    if (e.type == "touchstart") {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = items.offsetLeft - posX2 + "px";
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, "drag");
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, "drag");
    } else {
      items.style.left = posInitial + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function shiftSlide(dir, action) {
    items.classList.add("shifting");

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }

      if (dir == 1) {
        items.style.left = posInitial - slideSize + "px";
        index++;
      } else if (dir == -1) {
        items.style.left = posInitial + slideSize + "px";
        index--;
      }
    }

    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove("shifting");

    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }

    allowShift = true;
  }
}

dropdown = () => {
  let footerLinksItemHeader = document.querySelectorAll(".footer-links-item");

  const array = Array.prototype.slice.call(footerLinksItemHeader);

  array.map((item) => {
    let open = false;
    const header = item.children[0];
    const chevron = header.children[0];
    const content = item.children[1];
    header.addEventListener("click", () => {
      //disable dropdown clickable on desktop version
      if (document.body.offsetWidth < 970) {
        if (!open) {
          content.style.height = content.scrollHeight + "px";
          chevron.style.transform = "rotate(0deg)";
          open = true;
        } else {
          chevron.style.transform = "rotate(-180deg)";
          setTimeout(() => {
            content.style.height = 0 + "px";
            open = false;
          }, 200);
        }
      }
    });
  });
};
invertNavbarColor = () => {
  //desktop nav
  const navbar = document.querySelector(".dnavbar");
  const brandLogo = document.querySelector("#brand-logo");
  let dnavbarListItemTitle = document.querySelectorAll(
    ".dnavbar-list-item-title"
  );
  let dnavbarLoginOptions = document.querySelector(".dnavbar-loginOptions");
  const login = dnavbarLoginOptions.children[0];
  const getStarted = dnavbarLoginOptions.children[1];
  //mobile nav
  const mNavbar = document.querySelector(".navbar");
  const harmburger = document.querySelector(".navbar-harmburger").children;
  const brand = document.querySelector("#mobile-navbrand");
  window.onscroll = () => {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 72) {
      //desktop nav
      navbar.style.backgroundColor = "white";
      navbar.style.position = "fixed";
      navbar.style.width = "100%";
      navbar.style.top = "0px";
      navbar.style.boxShadow =
        "0px 4px 3px 0px rgba(34,90,182,.12), 0px 0px 1px 0px rgba(41,92,176,.25)";
      navbar.style.zIndex = "10";
      brandLogo.setAttribute("fill", "#000");
      for (let i = 0; i < dnavbarListItemTitle.length; i++) {
        dnavbarListItemTitle[i].children[0].style.color = "#45536b";
        if (dnavbarListItemTitle[i].children[1]) {
          dnavbarListItemTitle[i].children[1].style.color = "#45536b";
        }
      }
      login.style.color = "#45536b";
      getStarted.style.backgroundColor = "#2d67f7";
      getStarted.style.color = "#fff";
      //mobile nav
      mNavbar.style.position = "fixed";
      mNavbar.style.backgroundColor = "#fff";
      mNavbar.style.transition = "top 0.5s ease";
      mNavbar.style.top = "0px";
      mNavbar.style.width = "100%";
      brand.setAttribute("fill", "#000");
      for (let i = 0; i < harmburger.length; i++) {
        harmburger[i].style.backgroundColor = "#8b98ab";
      }
    } else {
      //desktop nav
      navbar.style.backgroundColor = "#152187";
      navbar.style.position = "initial";
      navbar.style.width = "100%";
      navbar.style.top = "-200px";
      navbar.style.boxShadow = "none";
      navbar.style.zIndex = "10";
      brandLogo.setAttribute("fill", "#fff");
      for (let i = 0; i < dnavbarListItemTitle.length; i++) {
        dnavbarListItemTitle[i].children[0].style.color = "#fff";
        if (dnavbarListItemTitle[i].children[1]) {
          dnavbarListItemTitle[i].children[1].style.color = "#fff";
        }
      }
      login.style.color = "#fff";
      getStarted.style.backgroundColor = "#fff";
      getStarted.style.color = "#2d67f7";
      //mobile nav
      mNavbar.style.position = "initial";
      mNavbar.style.transition = "background-color 1.5s";
      mNavbar.style.backgroundColor = "#152187";
      mNavbar.style.top = "-200px";
      brand.setAttribute("fill", "#fff");
      brand.setAttribute("fill", "#000");
      for (let i = 0; i < harmburger.length; i++) {
        harmburger[i].style.backgroundColor = "#fff";
      }
    }
  };
};
carousel = () => {
  const list = document.querySelector(".testimonial-carousel-list");
  const prev = document.querySelector(".testimonial-prev");
  const next = document.querySelector(".testimonial-next");
  slide(list, prev, next);
};
sidebarDropdown = () => {
  const trigger = document.querySelectorAll(
    ".sidebar-content-nav-list-header--dropdown"
  );
  for (let i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener("click", () => {
      //deactivate current dropmenu
      const active = document.querySelector(
        ".sidebar-content-nav-list-detail--active"
      );
      if (active) {
        active.className = active.className.replace(
          "sidebar-content-nav-list-detail--active",
          ""
        );
        active.style.height = "0px";
        active.previousElementSibling.children[1].style.transform =
          "rotate(0deg)";
      }
      //activate current dropmenu
      trigger[i].nextElementSibling.style.height =
        trigger[i].nextElementSibling.scrollHeight + "px";
      trigger[i].nextElementSibling.className =
        trigger[i].nextElementSibling.className +
        " sidebar-content-nav-list-detail--active";
      trigger[i].children[1].style.transform = "rotate(180deg)";
      if (active && active.previousElementSibling === trigger[i]) {
        active.style.height = "0px";
        active.className = active.className.replace(
          "sidebar-content-nav-list-detail--active",
          ""
        );
        trigger[i].children[1].style.transform = "rotate(0deg)";
      }
    });
  }
};
showAndHideSideBar = () => {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  const mharmgurger = document.querySelector("#mharmburger");
  const closeButton = document.querySelector(".sidebar-content-closeButton");
  mharmgurger.addEventListener("click", () => {
    sidebar.style.right = "0%";
    overlay.style.display = "block";
  });
  closeButton.addEventListener("click", () => {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });
};
window.onload = () => {
  dropdown();
  invertNavbarColor();
  carousel();
  sidebarDropdown();
  showAndHideSideBar();
};
