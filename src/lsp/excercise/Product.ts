export class Product {
    constructor(protected title: string, private price: number) {}

    getPrice(): number {
      return this.price;
    }
}
