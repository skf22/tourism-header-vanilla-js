const navBar = document.querySelector(".container");
const logo = document.querySelector(".logo");
const logoText = document.querySelector(".logo-text");
const navLinks = document.querySelectorAll(".nav .items li a");

const logoHover = () => {
  logo.addEventListener("mouseover", () => {
    logoText.style.color = "black";
    navBar.style.background = "black";
    navBar.style.transition = "all 0.75s ease-in-out";
  });
  logo.addEventListener("mouseout", () => {
    logoText.style.color = "";
    navBar.style.background = "";
  });
};
const linkHover = () => {
  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      navBar.style.background = "black";
      navBar.style.transition = "all 0.75s ease-in-out";
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("mouseout", () => {
      navBar.style.background = "";
    });
  });
};
logoHover();
linkHover();
