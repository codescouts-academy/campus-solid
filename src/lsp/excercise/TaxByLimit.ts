import { ITax } from './ITax'
import { Product } from './Product'

export class TaxByLimit implements ITax {
    constructor(private limit: number) {}

    getTax(product: Product): number {
        return product.getPrice() > this.limit
            ? product.getPrice()
            : product.getPrice() * 0.79
    }
}
