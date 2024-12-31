let CartQuantity = 0;

function getCartQuantity(Value) {
  if (CartQuantity + Value > 10) {
    document.querySelector(
      ".showcart-1"
    ).innerHTML = `Cart Quantity is : ${CartQuantity} <i class="fa-solid fa-cart-shopping"></i>Cart Is Full`;
  } else if (CartQuantity + Value < 0) {
    document.querySelector(
      ".showcart-1"
    ).innerHTML = `Cart Quantity is Empty : ${CartQuantity}<i class="fa-solid fa-cart-shopping"></i> `;
  } else {
    CartQuantity += Value;
    document.querySelector(
      ".showcart-1"
    ).innerHTML = `Cart Quantity is : ${CartQuantity}<i class="fa-solid fa-cart-shopping"></i>`;
  }
}
