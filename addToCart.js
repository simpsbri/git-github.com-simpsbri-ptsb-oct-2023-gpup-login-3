// Disable the checkout button by default
document.getElementById('checkout-btn').disabled = true;

//create the shopping cart storage array
let shoppingCart = [];

// Function to add item to the shopping cart
function addToCart(itemName, itemPrice) {
  let item = {
    name: itemName,
    price: itemPrice,
  };

  //! We need to finish this out to put all the elements in the page if we want to go that route.
  // const cart = document.getElementById('item-list-display');
  // let newItemCheckout = document.createElement('div');
  // let itemDiv = document.createElement('div');
  // let priceDiv = document.createElement('div');
  // let removeBtn = document.createElement('button');

  // newItemCheckout.className = 'item-checkout';
  // itemDiv.textContent = itemName;
  // priceDiv.textContent = itemPrice;
  // removeBtn.textContent = 'Remove';
  // removeBtn.onclick = function () {
  //   removeFromCart(itemName);
  // };

  // // Append the inner divs and remove button to the new div
  // newItemCheckout.appendChild(itemDiv);
  // newItemCheckout.appendChild(priceDiv);
  // newItemCheckout.appendChild(removeBtn);
  // cart.appendChild(newItemCheckout);

  // Add the new item to the shopping cart array
  shoppingCart.push(item);
  displayCart();
}

// Function to display the shopping cart items
function displayCart() {
  let cartItems = '';
  let totalItems = 0;
  let itemCost = 0;
  let shippingCost = 0;

  // Loop through the shopping cart array and display the items
  for (let i = 0; i < shoppingCart.length; i++) {
    cartItems +=
      '<li><span class="item-title">' +
      shoppingCart[i].name +
      ' - $' +
      shoppingCart[i].price +
      '</span>' +
      '<span class="delete-item"><button class="delete-btn">Remove</button></span></li>';
    itemCost += parseFloat(shoppingCart[i].price);
    totalItems++;
  }
  if (shoppingCart.length > 0) {
    shippingCost = 6.0;
    // Enable the checkout button when the cart is not empty
    document.getElementById('checkout-btn').disabled = false;
  }

  let shippingCostString = shippingCost.toFixed(2);
  let itemCostString = shippingCost + itemCost;

  // Display the cart items in the HTML page
  document.getElementById('item-list-list').innerHTML = cartItems;
  // Display the total number of items in the cart
  document.getElementById('totalItems').innerHTML = 'CART(' + totalItems + ')';
  document.getElementById('total-cost').innerHTML =
    'TOTAL: $' + itemCostString.toFixed(2);
  document.getElementById('tax-shipping-cost').innerHTML =
    '$' + shippingCostString;

  //create a delete function for each delete-btn that gets created in the cart.
  let deleteBtns = document.getElementsByClassName('delete-btn');
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', function () {
      removeFromCart(shoppingCart[i].name);
    });
  }

  // Function to remove item from the shopping cart
  function removeFromCart(itemName) {
    // Find the index of the item in the shopping cart array
    let index = shoppingCart.findIndex((item) => item.name === itemName);

    // If the item is found, remove it from the array
    if (index !== -1) {
      shoppingCart.splice(index, 1);
    }
    if (shoppingCart.length === 0) {
      document.getElementById('checkout-btn').disabled = true;
    }

    // Re-display the cart items to reflect the removal
    displayCart();
  }

  console.log(shoppingCart);
  console.log(totalItems);
}
