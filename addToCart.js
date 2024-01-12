// let shoppingCart = [];
// Function to add item to the shopping cart
function addToCart(itemName, itemPrice) {
  // Create a new object with item name and price
  // let item = {
  //   name: itemName,
  //   price: itemPrice,
  // };

  const cart = document.getElementById("item-list-display");
  let newItemCheckout = document.createElement("div");
  let itemDiv = document.createElement("div");
  let priceDiv = document.createElement("div");

  newItemCheckout.className = "item-checkout";
  itemDiv.textContent = itemName;
  priceDiv.textContent = itemPrice;

  // Append the inner divs to the new div
  newItemCheckout.appendChild(itemDiv);
  newItemCheckout.appendChild(priceDiv);
  cart.appendChild(newItemCheckout);
  // document.body.appendChild(newItemCheckout);

  // Push the new object to the shopping cart array
  // shoppingCart.push(item);
  // Display the shopping cart items
  // displayCart();
}

// Function to display the shopping cart items
function displayCart() {
  let cartItems = "";
  // Loop through the shopping cart array and display the items
  for (let i = 0; i < shoppingCart.length; i++) {
    cartItems += shoppingCart[i].name + " - $" + shoppingCart[i].price + "<br>";
  }

  // Display the cart items in the HTML page
  document.getElementById("cartItems").innerHTML = cartItems;
}
