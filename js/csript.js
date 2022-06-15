// Event lose open navBar trên đt thoại
let navbar = document.querySelector(".header .navbar");
// khi click vào menu-btn thì add thêm class active vào navbar
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#close-navbar").onclick = () => {
  navbar.classList.remove("active");
};

// event change form login or register
let registerBtn = document.querySelector(".account-form .register-btn");
let loginBtn = document.querySelector(".account-form .login-btn");

registerBtn.onclick = () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");

  document
    .querySelector(".account-form .login-form")
    .classList.remove("active");
  document
    .querySelector(".account-form .register-form")
    .classList.add("active");
};

loginBtn.onclick = () => {
  registerBtn.classList.remove("active");
  loginBtn.classList.add("active");

  document.querySelector(".account-form .login-form").classList.add("active");
  document
    .querySelector(".account-form .register-form")
    .classList.remove("active");
};

// Event lose open Form
let accountForm = document.querySelector(".account-form");
// khi click vào account-btn thì add thêm class active vào navbar
document.querySelector("#account-btn").onclick = () => {
  accountForm.classList.add("active");
};

document.querySelector("#close-form").onclick = () => {
  accountForm.classList.remove("active");
};

//slider banner Home
var swiper = new Swiper(".home-slider", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
  grabCursor: true,
});

// slider courses home
var swiper = new Swiper(".home-courses-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// slider teacher About
var swiper = new Swiper(".teacher-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// slider Student review About
var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// read more contact
let accordion = document.querySelectorAll(
  ".fag .accordion-container .accordion"
);
accordion.forEach((acc) => {
  acc.onclick = () => {
    accordion.forEach((dion) => dion.classList.remove("active"));
    acc.classList.toggle("active");
  };
});

// slider Logo Contact
var swiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

// Load more Courses
let loadMore = document.querySelector(".load-more .btn");
loadMore.onclick = () => {
  document.querySelectorAll(".courses .box-container .hide").forEach((show) => {
    show.style.display = "block";
  });

  document.querySelector(".load-more .btn").style.display = "none";
};
