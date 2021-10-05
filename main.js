console.log("init-main");

const menu = document.getElementById("main-menu");
const menuLinks = menu.getElementsByClassName("menu-link");
const tabContents = document.getElementsByClassName("tab-content");

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function () {
    for (let j = 0; j < menuLinks.length; j++) {
      if (i === j) {
        menuLinks[j].classList.add("active");
        tabContents[j].classList.add("active");
      } else {
        menuLinks[j].classList.remove("active");
        tabContents[j].classList.remove("active");
      }
    }
  });
}
