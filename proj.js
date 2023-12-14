


function openCustomModal() {
    document.getElementById("custom-modal").style.display = "flex";
}

function closeCustomModal() {
    document.getElementById("custom-modal").style.display = "none";
}

function submitCustomOrder() {
    
    alert("Order submitted! Thank you!");
    
    closeCustomModal();
}

let cart = [];
let totalQuantity = 0;
let totalPrice = 50.00;

function submitOrder(cakeType, sizeNeeded, quantityNeeded) {
  cart.push({ name: cakeType, size: sizeNeeded , quantity: quantityNeeded});
  totalQuantity++;
  totalPrice += totalPrice*quantityNeeded;

  updateCart();
}

function updateCart() {
  }