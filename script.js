const navEL = document.querySelector(".navbar");
const navContainer = document.getElementById("navContainer");
const navItems = document.querySelectorAll(".nav-item .nav-link");
const navBrand = document.querySelector(".navbar-brand");
document.getElementById("navbar").classList.remove("navbar-scroll");
// navIT.classList.remove("active");

// Menambah atau Menghapus class saat scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEL.classList.add("navbar-scroll");
    navEL.classList.add("navbar-light");
    navEL.classList.remove("navbar-dark");
    navContainer.classList.remove("mb-3");
    navContainer.classList.remove("mt-3");
  } else {
    navEL.classList.remove("navbar-scroll");
    navEL.classList.remove("navbar-light");
    navEL.classList.add("navbar-dark");
    navContainer.classList.add("mb-3");
    navContainer.classList.add("mt-3");
  }
});

// Fungsi untuk mengatur kelas active
function setActive(link) {
  navItems.forEach((item) => item.classList.remove("active")); // Hapus active dari semua
  link.classList.add("active"); // Tambahkan active ke elemen yang dipilih
}

// Tambahkan event listener ke setiap nav-link
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    setActive(link);
  });
});

// Tambahkan event listener ke nav-brand
navBrand.addEventListener("click", () => {
  const homeLink = document.querySelector('.nav-item .nav-link[href="#Home"]');
  if (homeLink) {
    setActive(homeLink); // Set active ke Home
  }
});
