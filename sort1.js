// Function to parse and extract the price from the product element
function parsePrice(productElement) {
    const priceElement = productElement.querySelector(".price");
    if (priceElement) {
      const priceText = priceElement.textContent.trim();
      const priceParts = priceText.match(/\d+(\.\d{1,2})?/);
      if (priceParts && priceParts[0]) {
        return parseFloat(priceParts[0]);
      }
    }
    return NaN; // Return NaN in case of any errors
}

// Function to sort and display products by name in ascending order (A-Z)
function sortAndDisplayProductsByNameAscending() {
    const productsContainer = document.getElementById("products");
    const productElements = Array.from(productsContainer.getElementsByClassName("product"));
  
    // Sort the product elements by name in ascending order (A-Z)
    productElements.sort((a, b) => {
      const nameA = a.querySelector("h2").textContent.trim().toLowerCase();
      const nameB = b.querySelector("h2").textContent.trim().toLowerCase();
      return nameA.localeCompare(nameB);
    });
  
    // Clear the container
    productsContainer.innerHTML = "";
  
    // Append the sorted product elements to the container
    productElements.forEach((product) => {
      productsContainer.appendChild(product);
    });
}

// Function to sort and display products by name in descending order (Z-A)
function sortAndDisplayProductsByNameDescending() {
    const productsContainer = document.getElementById("products");
    const productElements = Array.from(productsContainer.getElementsByClassName("product"));
  
    // Sort the product elements by name in descending order (Z-A)
    productElements.sort((a, b) => {
      const nameA = a.querySelector("h2").textContent.trim().toLowerCase();
      const nameB = b.querySelector("h2").textContent.trim().toLowerCase();
      return nameB.localeCompare(nameA);
    });
  
    // Clear the container
    productsContainer.innerHTML = "";
  
    // Append the sorted product elements to the container
    productElements.forEach((product) => {
      productsContainer.appendChild(product);
    });
}

// Function to sort and display products by price in ascending order (Lowest to Highest)
function sortAndDisplayProductsByPriceLowToHigh() {
    const productsContainer = document.getElementById("products");
    const productElements = Array.from(productsContainer.getElementsByClassName("product"));
  
    // Sort the product elements by price in ascending order (Lowest to Highest)
    productElements.sort((a, b) => {
      const priceA = parsePrice(a);
      const priceB = parsePrice(b);
      return priceA - priceB;
    });
  
    // Clear the container
    productsContainer.innerHTML = "";

    // Append the sorted product elements to the container
    productElements.forEach((product) => {
      productsContainer.appendChild(product);
    });
}

// Function to sort and display products by price in descending order (Highest to Lowest)
function sortAndDisplayProductsByPriceHighToLow() {
    const productsContainer = document.getElementById("products");
    const productElements = Array.from(productsContainer.getElementsByClassName("product"));
  
    // Sort the product elements by price in descending order (Highest to Lowest)
    productElements.sort((a, b) => {
      const priceA = parsePrice(a);
      const priceB = parsePrice(b);
      return priceB - priceA;
    });
  
    // Clear the container
    productsContainer.innerHTML = "";

    // Append the sorted product elements to the container
    productElements.forEach((product) => {
      productsContainer.appendChild(product);
    });
}

// Event listener to handle dropdown selection
document.getElementById("sorting-dropdown").addEventListener("change", function () {
    const selectedOption = this.value;
    if (selectedOption === "asc") {
      sortAndDisplayProductsByNameAscending();
    } else if (selectedOption === "desc") {
      sortAndDisplayProductsByNameDescending();
    } else if (selectedOption === "priceLowToHigh") {
      sortAndDisplayProductsByPriceLowToHigh();
    } else if (selectedOption === "priceHighToLow") {
      sortAndDisplayProductsByPriceHighToLow(); // Corrected function name here
    }
});


  
  
