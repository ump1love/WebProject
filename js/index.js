var menu = document.getElementById("menu");
if (menu) {
  menu.addEventListener("click", function (e) {
    window.location.href = "indexMenu.html";
  });
}

var user = document.getElementById("user");
if (user) {
  user.addEventListener("click", function (e) {
    window.location.href = "indexRegistration.html";
  });
}

var cart = document.getElementById("cart");
if (cart) {
  cart.addEventListener("click", function (e) {
    window.location.href = "indexCart.html";
  });
}

var compChoose = document.getElementById("compChoose");
if (compChoose) {
  compChoose.addEventListener("click", function (e) {
    window.location.href = "comp.html";
  });
}