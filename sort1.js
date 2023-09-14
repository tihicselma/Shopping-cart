
function parsePrice(productElement) {
    const priceElement = productElement.querySelector(".price");
    if (priceElement) {
      const priceText = priceElement.textContent.trim();
      const priceParts = priceText.match(/\d+(\.\d{1,2})?/);
      if (priceParts && priceParts[0]) {
        return parseFloat(priceParts[0]);
      }
    }
    return NaN;
}

function sortAndDisplayProductsByNameAscending() {
    const productsContainer = document.getElementById("products");
    const productElements = Array.from(productsContainer.getElementsByClassName("product"));

    productElements.sort((a, b) => {
      const nameA = a.querySelector("h2").textContent.trim().toLowerCase();
      const nameB = b.querySelector("h2").textContent.trim().toLowerCase();
      return nameA.localeCompare(nameB);
    });
  
    productsContainer.innerHTML = "";
    productElements.forEach((product) => {
      productsContainer.appendChild(product);
    });
}

function sortAndDisplayProductsByNameDescending() {
    const productsContainer = document.getElementById("products");
    const productElements = Array.from(productsContainer.getElementsByClassName("product"));
  
    productElements.sort((a, b) => {
      const nameA = a.querySelector("h2").textContent.trim().toLowerCase();
      const nameB = b.querySelector("h2").textContent.trim().toLowerCase();
      return nameB.localeCompare(nameA);
    });
  

    productsContainer.innerHTML = "";
  
    productElements.forEach((product) => {
      productsContainer.appendChild(product);
    });
}

function sortAndDisplayProductsByPriceLowToHigh() {
    const productsContainer = document.getElementById("products");
    const productElements = Array.from(productsContainer.getElementsByClassName("product"));

    productElements.sort((a, b) => {
      const priceA = parsePrice(a);
      const priceB = parsePrice(b);
      return priceA - priceB;
    });
  
    productsContainer.innerHTML = "";

    productElements.forEach((product) => {
      productsContainer.appendChild(product);
    });
}

function sortAndDisplayProductsByPriceHighToLow() {
    const productsContainer = document.getElementById("products");
    const productElements = Array.from(productsContainer.getElementsByClassName("product"));
  
    productElements.sort((a, b) => {
      const priceA = parsePrice(a);
      const priceB = parsePrice(b);
      return priceB - priceA;
    });
  
    productsContainer.innerHTML = "";

    productElements.forEach((product) => {
      productsContainer.appendChild(product);
    });
}

document.getElementById("sorting-dropdown").addEventListener("change", function () {
    const selectedOption = this.value;
    if (selectedOption === "asc") {
      sortAndDisplayProductsByNameAscending();
    } else if (selectedOption === "desc") {
      sortAndDisplayProductsByNameDescending();
    } else if (selectedOption === "priceLowToHigh") {
      sortAndDisplayProductsByPriceLowToHigh();
    } else if (selectedOption === "priceHighToLow") {
      sortAndDisplayProductsByPriceHighToLow(); 
    }
});


  
  
