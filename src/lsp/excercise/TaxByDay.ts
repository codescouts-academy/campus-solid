import { ITax } from './ITax'
import { Product } from './Product'

export class TaxByDay implements ITax {
    getTax(product: Product): number {
        const dayOfWeek = new Date().getDay()
        return dayOfWeek === 0 || dayOfWeek === 6
            ? product.getPrice() * 0.1
            : product.getPrice() * 0.05
    }
}
