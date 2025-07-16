document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
    const cartItemsList = document.querySelector(".cart-items");
    const totalAmount = document.querySelector(".total-amount");

    let cart = []; 

    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const itemName = button.dataset.name;
        const itemPrice = parseFloat(button.dataset.price);

      
        cart.push({ name: itemName, price: itemPrice });

      
        displayCart();
      });
    });

    function displayCart() {
      cartItemsList.innerHTML = "";
      let total = 0;

      cart.forEach((item) => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.name}: ${item.price} грн`;
        cartItemsList.appendChild(cartItem);

        total += item.price;
      });

      totalAmount.textContent = `Загальна сума: ${total} грн`;
    }
  });