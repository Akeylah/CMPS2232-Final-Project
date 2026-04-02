import User from "./user";
import Order from "./order";

class Customer extends User {
//address , email 
  private orders: Order[] = [];

  constructor(userId: number, username: string, password: string) {
    super(userId, username, password, 'customer');
  }


  // Place a new order
  public placeOrder(order: Order): void {
    this.orders.push(order);
  }

  // View all orders
  public viewOrders(): Order[] {
    return this.orders;
  }

  // Get order by ID
  public getOrderById(orderId: number): Order | undefined {
    return this.orders.find(order => order.getOrderId() === orderId);
  }
}

export default Customer;