let loginForm = document.querySelector(".header .login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  menuFunc.classList.remove("active");
};

let menuFunc = document.querySelector(".header .menu-func");

document.querySelector("#config-btn").onclick = () => {
  menuFunc.classList.toggle("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  menuFunc.classList.remove("active");
};
