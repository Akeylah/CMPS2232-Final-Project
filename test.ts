import Cart from "./classes/cart";
import CartItem from "./classes/cartitems";

const cart = new Cart(1, 101);

// Add items
const item1 = new CartItem(1, "Burger", 10, 2);
const item2 = new CartItem(2, "Fries", 5, 1);

cart.addItem(item1);
cart.addItem(item2);

// Test outputs
console.log(cart.getItems());
console.log("Total:", cart.getTotal());

// Remove item
cart.removeItem(1);

console.log("After removal:", cart.getItems());