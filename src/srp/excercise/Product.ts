export class Product {
    constructor(private title: string, private price: number) {}

    getPrice(): number {
      return this.price;
    }
}
