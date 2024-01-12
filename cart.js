let shoppingCart = [];
let cartItems = '';
// Function to add item to the shopping cart
function addToCart(itemName, itemPrice) {
  // Create a new object with item name and price
  let item = {
    name: itemName,
    price: itemPrice,
  };

  // Push the new object to the shopping cart array
  shoppingCart.push(item);

  // Display the shopping cart items
  displayCart();
}

// Function to display the shopping cart items
function displayCart() {
  // Loop through the shopping cart array and display the items
  for (let i = 0; i < shoppingCart.length; i++) {
    cartItems += shoppingCart[i].name + ' - $' + shoppingCart[i].price + '<br>';
  }

  // Display the cart items in the HTML page
  document.getElementById('cartItems').innerHTML = cartItems;
}
