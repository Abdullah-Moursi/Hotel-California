// Sticky Navbar

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.querySelector("#nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

var menu, menuLinks, navlogo;
menu = document.querySelector("#mobile_menu");
menuLinks = document.querySelector(".Navbar__Items");
navlogo = document.querySelector("#nav_logo");

// Display mobile menu

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling

const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#hom");
  const aboutMenu = document.querySelector("#abou");
  const servicesMenu = document.querySelector("#service");

  let scrollpos = window.scrollY;

  // adds 'highlight' class to my menu items

  if (window.innerWidth > 960 && scrollpos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollpos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollpos < 2345) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollpos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("click", highlightMenu);
window.addEventListener("scroll", highlightMenu);

// Close mobile menu when clicking on a menu item

const hideMenuBar = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMenuBar);
