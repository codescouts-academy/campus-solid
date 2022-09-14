import { IProduct } from "../Core/IProduct";
import { ITax } from "../Core/ITax";


export class TaxByLimit implements ITax {
    constructor(private limit: number) {}

    getTax(product: IProduct): number {
        return product.getPrice() > this.limit
            ? product.getPrice()
            : product.getPrice() * 0.79
    }
}
