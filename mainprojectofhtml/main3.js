
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const card = button.closest(".card");
        const name = button.getAttribute("data-name");
        const price = button.getAttribute("data-price");
        const quantitySelect = card.querySelector(".quantity-select");
        const quantity = quantitySelect.value;

        const item = {
            name: name,
            price: price,
            quantity: quantity
        };

        let cart = localStorage.getItem("cart");
        if (cart) {
            cart = JSON.parse(cart);
        } else {
            cart = [];
        }

        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${name} has been added to your cart!`);
    }
});















