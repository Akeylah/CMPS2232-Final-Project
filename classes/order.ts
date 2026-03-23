import OrderItem from "./orderitems";

type OrderStatus = 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled';
type OrderType = 'pickup' | 'delivery';

class Order {
  private orderId: number;
  private userId: number;
  private items: OrderItem[] = [];
  private status: OrderStatus;
  private orderType: OrderType;
  private totalPrice: number;

  constructor(orderId: number, userId: number, orderType: OrderType) {
    this.orderId = orderId;
    this.userId = userId;
    this.orderType = orderType;
    this.status = 'pending';
    this.totalPrice = 0;
  }

  public getOrderId(): number {
    return this.orderId;
  }

  public getStatus(): OrderStatus {
    return this.status;
  }

  public getItems(): OrderItem[] {
    return this.items;
  }

  public getTotalPrice(): number {
    return this.totalPrice;
  }


  // Add item to order
  public addItem(item: OrderItem): void {
    this.items.push(item);
    this.calculateTotal();
  }

  // Remove item
  public removeItem(itemId: number): void {
    this.items = this.items.filter(item => item.getItemId() !== itemId);
    this.calculateTotal();
  }

  // Calculate total
  private calculateTotal(): void {
    this.totalPrice = this.items.reduce((total, item) => total + item.getSubtotal(), 0);
  }

  // Update status (Admin will use this)
  public updateStatus(status: OrderStatus): void {
    this.status = status;
  }

  // Display summary
  public getOrderSummary(): string {
    return `Order #${this.orderId} - Status: ${this.status} - Total: $${this.totalPrice}`;
  }
}

export default Order;