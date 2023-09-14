document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const clearCartButton = document.getElementById("clear-cart-button");
    const checkoutForm = document.getElementById("checkout-form");
    const checkoutButton = document.getElementById("checkout-button");

    function updateCart() {
        cartItems.innerHTML = ""; // Clear the cart items list
        let total = 0.00;

        cart.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("cart-item"); // Add a class for styling

            const itemText = document.createElement("span");
            itemText.textContent = `${item.product} x ${item.quantity} - ${item.price} KM`;
            listItem.appendChild(itemText);

            const buttonGroup = document.createElement("div");
            buttonGroup.classList.add("button-group"); // Add a class for styling

            const removeButton = document.createElement("button");
            removeButton.textContent = "-";
            removeButton.classList.add("remove-button", "button"); // Add classes for styling
            removeButton.addEventListener("click", () => {
                removeFromCart(index);
            });

            const addButton = document.createElement("button");
            addButton.textContent = "+";
            addButton.classList.add("add-button", "button"); // Add classes for styling
            addButton.addEventListener("click", () => {
                addToCart(item.product, item.price);
            });

            buttonGroup.appendChild(removeButton);
            buttonGroup.appendChild(addButton);
            listItem.appendChild(buttonGroup);

            cartItems.appendChild(listItem);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = total.toFixed(2) + " KM";
    }

    function addToCart(product, price) {
        const existingItem = cart.find((item) => item.product === product);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ product, price, quantity: 1 });
        }

        updateCart();
    }

    function removeFromCart(index) {
        if (index >= 0 && index < cart.length) {
            const item = cart[index];
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                cart.splice(index, 1);
            }
        }

        updateCart();
    }

    function clearCart() {
        cart.length = 0; // Clear the cart array
        updateCart();
    }
    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;

        if (name.trim() === "" || email.trim() === "" || address.trim() === "") {
            alert("Please fill out all fields in the checkout form.");
            return false;
        }

        return true;
    }

    document.querySelectorAll(".button").forEach((button) => {
        button.addEventListener("click", function () {
            const product = this.dataset.product;
            const price = parseFloat(this.dataset.price);
            addToCart(product, price);
        });
    });
    checkoutButton.addEventListener("click", function () {
        const isValid = validateForm();
        if (isValid) {
            // Implement the logic to handle the checkout (e.g., submit the form to a server)
            // You can also clear the cart after successful checkout
            alert("Order placed successfully!");
            clearCart();
        }
    });

    clearCartButton.addEventListener("click", function () {
        clearCart();
    });

    // Store the cart data in local storage for use on page reload
    localStorage.setItem("cart", JSON.stringify(cart));

    // Load the cart data from local storage on page load
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
        cart.push(...savedCart);
        updateCart();
    }
});




  






