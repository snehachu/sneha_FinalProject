


function openCustomModal() {
    document.getElementById("custom-modal").style.display = "flex";
}

function closeCustomModal() {
    document.getElementById("custom-modal").style.display = "none";
}

function addToCart(){

    const cakeType = document.getElementById('cakeType').value;
    const cakeSize = document.getElementById('cakeSize').value;
    const quantity = document.getElementById('quantity').value;
}


const cartItem = document.createElement('li');
cartItem.textContent =`${quantity} ${cakeSize} ${cakeType} cake(s)`;

document.getElementById('cartItems').appendChild(cartItem);
