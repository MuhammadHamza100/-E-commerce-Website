let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  cartTotal += price;
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById('cart-count');
  const cartTotalElement = document.getElementById('cart-total');
  const cartList = document.getElementById('cart-items');

  cartCount.textContent = cartItems.length;
  cartTotalElement.textContent = cartTotal.toFixed(2);

  cartList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

function openCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  cartSidebar.classList.add('open');
}
function openCart() {
    const cart_count = document.getElementById('cart_count');
    cart_count.classList.add('open');
  }

function closeCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  cartSidebar.classList.remove('open');
}

function checkout() {
  alert('Thank you for your purchase!');
  cartItems = [];
  cartTotal = 0;
  updateCart();
  closeCart();
}

