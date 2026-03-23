class MenuItem {
  private itemId: number;
  private name: string;
  private description: string;
  private price: number;
  private category: string;
  private imageUrl: string;

  constructor(itemId: number, name: string, description: string, price: number, category: string, imageUrl: string) {
    this.itemId = itemId;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.imageUrl = imageUrl;
  }

  public getItemId(): number {
    return this.itemId;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCategory(): string {
    return this.category;
  }

  public getImageUrl(): string {
    return this.imageUrl;
  }
}

export default MenuItem;