document.getElementById("cart-icon").addEventListener("click", function() {
    var cartNotification = document.getElementById("cart-notification");
    cartNotification.classList.add("visible");
    setTimeout(function() {
        cartNotification.classList.remove("visible");
    }, 2000);

    var cartAlert = document.getElementById("cart-alert");
    cartAlert.classList.add("visible");
});

document.getElementById("close-cart-alert").addEventListener("click", function() {
    var cartAlert = document.getElementById("cart-alert");
    cartAlert.classList.remove("visible");
});

document.getElementById("bot-button").addEventListener("click", function() {
    var bot = document.getElementById("bot");
    bot.classList.add("visible");
});

document.getElementById("close-bot-button").addEventListener("click", function() {
    var bot = document.getElementById("bot");
    bot.classList.remove("visible");
});

var addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var cartNotification = document.getElementById("cart-notification");
        cartNotification.classList.add("visible");
        setTimeout(function() {
            cartNotification.classList.remove("visible");
        }, 2000);
    });
});
