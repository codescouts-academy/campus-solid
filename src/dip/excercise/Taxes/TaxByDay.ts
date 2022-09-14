import { IProduct } from "../Core/IProduct"
import { ITax } from "../Core/ITax"

export class TaxByDay implements ITax {
    getTax(product: IProduct): number {
        const dayOfWeek = new Date().getDay()
        return dayOfWeek === 0 || dayOfWeek === 6
            ? product.getPrice() * 0.1
            : product.getPrice() * 0.05
    }
}
