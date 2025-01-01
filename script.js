// Fungsi untuk menyembunyikan semua halaman
function hideAllPages() {
    const pagesElements = document.querySelectorAll('.pages'); // Menambahkan 'section' ke selector
    pagesElements.forEach(page => {
        page.style.display = 'none'; // Sembunyikan halaman
    });
}

// Fungsi untuk menampilkan halaman berdasarkan parameter
function showPages(className) {
    hideAllPages(); // Sembunyikan semua halaman
    const pageElements = document.getElementsByClassName(className); // Menggunakan className
    if (pageElements) {
        for (let i = 0; i < pageElements.length; i++) {
            pageElements[i].style.display = 'block'; // Tampilkan halaman yang sesuai
        }
    }
}

// Fungsi untuk mengubah title berdasarkan parameter URL
function setPageTitle(pageParam) {
    let pageTitle = document.title; // Ambil judul default dari elemen <title> HTML

    // Sesuaikan title berdasarkan parameter
    switch (pageParam) {
        case 'home':
            pageTitle = 'Home Page';
            break;
        case 'about':
            pageTitle = 'About Us';
            break;
        case 'contact':
            pageTitle = 'Contact Us';
            break;
        // Tambahkan case lain sesuai kebutuhan
        default:
            // Jika parameter tidak dikenali, gunakan judul default dari HTML
            break;
    }

    // Set judul halaman
    document.title = pageTitle;
}

// Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const pageParam = urlParams.get('pages'); // Mendapatkan nilai parameter 'pages'

// Debugging: Cek nilai pageParam
console.log('pageParam:', pageParam);

// Set judul halaman berdasarkan parameter
setPageTitle(pageParam);

// Menampilkan halaman jika parameter ada
if (pageParam) {
    showPages(pageParam); // Panggil fungsi untuk menampilkan halaman
} else {
    hideAllPages(); // Jika tidak ada parameter, sembunyikan semua halaman
    const defaultPage = document.getElementsByClassName('defaultPage');
    if (defaultPage.length > 0) {
        for (let i = 0; i < defaultPage.length; i++) {
            defaultPage[i].style.display = 'block'; // Tampilkan halaman default
        }
    } else {
        console.error('Tidak ada elemen dengan kelas defaultPage.'); // Debugging: Jika defaultPage tidak ditemukan
    }
}

$(document).ready(function(){
    $("#owl-carousel-sanchia").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-sanchia',
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            768: {
                items: 2,
                margin: 40
            },
            980: {
                items: 2,
                margin: 40
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });
});

$(document).ready(function(){
    $("#owl-carousel-birthday").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-birthday',
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            768: {
                items: 2,
                margin: 40
            },
            980: {
                items: 2,
                margin: 40
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });
});

$(document).ready(function(){
    $("#owl-carousel-perpisahan").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-perpisahan',
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            768: {
                items: 2,
                margin: 40
            },
            980: {
                items: 2,
                margin: 40
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });
});

$(document).ready(function(){
    $("#owl-carousel-himapol").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-himapol',
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            768: {
                items: 2,
                margin: 40
            },
            980: {
                items: 2,
                margin: 40
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });
});