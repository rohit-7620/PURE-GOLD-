// --- Cart Logic ---
const CART_KEY = 'puregoldoils_cart';
const ADDRESSES_KEY = 'puregoldoils_addresses';
const SELECTED_ADDRESS_KEY = 'puregoldoils_selected_address';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}
function setCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function addToCart(product) {
  let cart = getCart();
  let idx = cart.findIndex(p => p.id === product.id);
  if (idx > -1) {
    cart[idx].qty += 1;
  } else {
    cart.push({...product, qty: 1});
  }
  setCart(cart);
}
function updateCartQty(productId, qty) {
  let cart = getCart();
  let idx = cart.findIndex(p => p.id === productId);
  if (idx > -1) {
    cart[idx].qty = qty;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    setCart(cart);
  }
}
function removeFromCart(productId) {
  let cart = getCart().filter(p => p.id !== productId);
  setCart(cart);
}

// --- Address Logic ---
function getAddresses() {
  return JSON.parse(localStorage.getItem(ADDRESSES_KEY) || '[]');
}
function setAddresses(addresses) {
  localStorage.setItem(ADDRESSES_KEY, JSON.stringify(addresses));
}
function addAddress(address) {
  let addresses = getAddresses();
  addresses.push(address);
  setAddresses(addresses);
}
function removeAddress(idx) {
  let addresses = getAddresses();
  addresses.splice(idx, 1);
  setAddresses(addresses);
}
function selectAddress(idx) {
  localStorage.setItem(SELECTED_ADDRESS_KEY, idx);
}
function getSelectedAddress() {
  let idx = localStorage.getItem(SELECTED_ADDRESS_KEY);
  let addresses = getAddresses();
  return addresses[idx] || null;
}

// --- Utility ---
function formatRupee(n) {
  return '₹' + n.toLocaleString('en-IN');
}

// --- Expose for inline use ---
window.PureGold = {
  getCart, setCart, addToCart, updateCartQty, removeFromCart,
  getAddresses, setAddresses, addAddress, removeAddress, selectAddress, getSelectedAddress,
  formatRupee
}; 