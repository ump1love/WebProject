var logo1Image = document.getElementById("logo1Image");
if (logo1Image) {
  logo1Image.addEventListener("click", function (e) {
    window.location.href = "index.html";
  });
}

var menu = document.getElementById("menu");
if (menu) {
  menu.addEventListener("click", function (e) {
    window.location.href = "compMenu.html";
  });
}

var user = document.getElementById("user");
if (user) {
  user.addEventListener("click", function (e) {
    window.location.href = "compRegistration.html";
  });
}

var cart = document.getElementById("cart");
if (cart) {
  cart.addEventListener("click", function (e) {
    window.location.href = "compCart.html";
  });
}

var choice = document.getElementById("choice");
if (choice) {
  choice.addEventListener("click", function (e) {
    window.location.href = "compDetails.html";
  });
}