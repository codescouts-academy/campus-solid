import { IProduct } from '../Core/IProduct'

export class Product implements IProduct {
    constructor(
        private id: number,
        protected title: string,
        private price: number
    ) {}

    getID(): number {
        return this.id
    }

    getPrice(): number {
        return this.price
    }
}
