import User from "./user";

class Admin extends User {

constructor(userId: number, username: string, password: string) {
super(userId, username, password, email, 'admin');
}

// View all orders
public viewAllOrders(): string {
return "Displaying all orders...";
}

// Update order status
public updateOrderStatus(orderId: number, status: string): string {
return `Order ${orderId} updated to status: ${status}`;
}

// Add new menu item
public addMenuItem(name: string, price: number): string {
return `Menu item '${name}' added with price $${price}`;
}

// Remove menu item
public removeMenuItem(itemId: number): string {
return `Menu item with ID ${itemId} removed`;
}

// View all users
public viewUsers(): string {
return "Displaying all users...";
}
}

export default Admin;