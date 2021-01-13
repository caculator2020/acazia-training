menuDropdown = () => {
  const menuTrigger = document.querySelector(".nav-menuTrigger");
  const mobileMenu = document.querySelector(".nav-mobileWrapper");
  let open = false;
  mobileMenu.classList.add("nav-mobileWrapper--close");
  menuTrigger.addEventListener("click", () => {
    if (!open) {
      mobileMenu.classList.remove("nav-mobileWrapper--close");
      mobileMenu.classList.add("nav-mobileWrapper--open");
      open = !open;
    } else {
      mobileMenu.classList.remove("nav-mobileWrapper--open");
      mobileMenu.classList.add("nav-mobileWrapper--close");
      open = !open;
    }
  });
};
subMenuMobileDropdown = () => {
  const trigger = document.querySelector("#submenuMobileDropdownTrigger");
  const dropdown = document.querySelector(".nav-menu-item-dropdown");
  const chevron = document.querySelector(".fa-chevron-right");
  let open = false;
  dropdown.classList.add("nav-menu-item-dropdown--close");
  trigger.addEventListener("click", () => {
    if (!open) {
      dropdown.classList.remove("nav-menu-item-dropdown--close");
      dropdown.classList.add("nav-menu-item-dropdown--open");
      chevron.classList.toggle("rotateDown");
      open = !open;
    } else {
      dropdown.classList.remove("nav-menu-item-dropdown--open");
      dropdown.classList.add("nav-menu-item-dropdown--close");
      chevron.classList.toggle("rotateDown");
      open = !open;
    }
  });
};
introAnimation = (
  innerHeader = "<span>Listen</span> <span>to new music</span>"
) => {
  const img = document.querySelector(".intro-content-img");
  const header = document.querySelector(".intro-content-header");
  header.innerHTML = innerHeader;
  const descriptions = document.querySelector(".intro-content-description");
  const button1 = document.querySelector(".intro-content-button").children[0];
  const button2 = document.querySelector(".intro-content-button").children[1];

  img.classList.add("hidden");
  header.classList.add("hidden");
  descriptions.classList.add("hidden");
  button1.classList.add("hidden");
  button2.classList.add("hidden");

  img.classList.remove("intro--animation");
  header.classList.remove("intro--animation");
  descriptions.classList.remove("intro--animation");
  button1.classList.remove("intro--animation");
  button2.classList.remove("intro--animation");
  setTimeout(() => {
    img.classList.remove("hidden");
    img.classList.add("intro--animation");
  }, 0);
  setTimeout(() => {
    header.classList.remove("hidden");
    header.classList.add("intro--animation");
  }, 200);
  setTimeout(() => {
    descriptions.classList.remove("hidden");
    descriptions.classList.add("intro--animation");
  }, 400);
  setTimeout(() => {
    button1.classList.remove("hidden");
    button1.classList.add("intro--animation");
  }, 600);
  setTimeout(() => {
    button2.classList.remove("hidden");
    button2.classList.add("intro--animation");
  }, 800);
};
var lastClick;
introDotsClickHandler = () => {
  const dots = document.querySelector(".intro-content-dots").children;
  currentActiveIndex = 0;
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      if (currentActiveIndex !== i) {
        lastClick = new Date().getTime();
        dots[currentActiveIndex].classList.remove("intro-content-dots--active");
        currentActiveIndex = i;
        dots[currentActiveIndex].classList.add("intro-content-dots--active");
        if (i == 0) {
          introAnimation();
        } else {
          introAnimation("<span>Music</span> <span>for everyone.</span>");
        }
      }
    });
  }
};
autoClickDots = () => {
  const dots = document.querySelector(".intro-content-dots").children;

  setInterval(() => {
    if (new Date().getTime() - lastClick > 5000) {
      let nextActiveIndex;
      if (currentActiveIndex === 1) {
        nextActiveIndex = 0;
      } else {
        nextActiveIndex = 1;
      }
      dots[nextActiveIndex].click();
    }
  }, 6000);
};
window.onload = () => {
  menuDropdown();
  subMenuMobileDropdown();
  introDotsClickHandler();
  // autoClickDots();
};
