const navEL = document.querySelector(".navbar");
document.getElementById("navbar").classList.remove("navbar-scroll");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEL.classList.add("navbar-scroll");
  } else {
    navEL.classList.remove("navbar-scroll");
  }
});
