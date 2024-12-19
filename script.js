const navEL = document.querySelector(".navbar");
document.getElementById("navbar").classList.remove("navbar-scroll");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEL.classList.add("navbar-scroll");
    navEL.classList.add("navbar-light");
    navEL.classList.remove("navbar-dark");
  } else {
    navEL.classList.remove("navbar-scroll");
    navEL.classList.remove("navbar-light");
    navEL.classList.add("navbar-dark");
  }
});
