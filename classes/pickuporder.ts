import Order from "./order";

class PickupOrder extends Order {
//time stamp , order summary 
  constructor(orderId: number, userId: number) {
    super(orderId, userId, 'pickup');
  }

  public getPickupMessage(): string {
    return "Your order will be ready for pickup.";
  }
}

export default PickupOrder;