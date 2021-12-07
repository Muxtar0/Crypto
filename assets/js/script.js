// populars swiper
var swiper = new Swiper(".populars-swiper", {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// slider main
var swiper = new Swiper(".slider-main", {
  loop: true,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});


// news slider

var swiper = new Swiper(".news-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
  },
});
var swiper = new Swiper(" .coin-news", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 15,
    },
  },
});




// table
$(function () {
  $("#myTable").tablesorter();
});

// nice select

$(document).ready(function () {
  $('#calculation select').niceSelect();
});



// chart js
var xValues = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'];
var yValues = [5, 8, 14, 3, 15, 9];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(0,125,215, .2)",
      borderColor: "#007DD7",
      pointBorderWidth: 10,
      data: yValues
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 20
        }
      }],
    }
  }
});
// nav bottom circle
const nav_link = document.querySelectorAll('.nav-link');

nav_link[0].addEventListener('click', (e) => {
  for (let i = 0; i < nav_link.length; i++) {
    nav_link[i].classList.remove("active")
  }
  nav_link[0].classList.add('active');
})
nav_link[1].addEventListener('click', (e) => {
  for (let i = 0; i < nav_link.length; i++) {
    nav_link[i].classList.remove("active")
  }
  nav_link[1].classList.add('active');
})
nav_link[2].addEventListener('click', (e) => {
  for (let i = 0; i < nav_link.length; i++) {
    nav_link[i].classList.remove("active")
  }
  nav_link[2].classList.add('active');
})
nav_link[3].addEventListener('click', (e) => {
  for (let i = 0; i < nav_link.length; i++) {
    nav_link[i].classList.remove("active")
  }
  nav_link[3].classList.add('active');
})
nav_link[4].addEventListener('click', (e) => {
  for (let i = 0; i < nav_link.length; i++) {
    nav_link[i].classList.remove("active")
  }
  nav_link[4].classList.add('active');
})

// mobile slider-menu
const sidebar_btn = document.querySelector('.sidebar-btn');
const close_btn = document.querySelector('.close-btn');

sidebar_btn.addEventListener('click', (e) => {
  document.querySelector('.sidebar-menu').classList.add('active');
})
close_btn.addEventListener('click', (e) => {
  document.querySelector('.sidebar-menu').classList.remove('active');
})