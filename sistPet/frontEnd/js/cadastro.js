let btnOlho = document.getElementById("olho");

btnOlho.addEventListener("click", function () {
  let input = document.querySelector("#senha");
  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});
