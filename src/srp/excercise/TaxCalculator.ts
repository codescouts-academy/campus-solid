import { Market } from "./Market";
import { Product } from "./Product";

export class TaxCalculator {
    static computeTax(product: Product, market: Market): number {
        return product.getPrice() > market.getLimit()
            ? product.getPrice()
            : product.getPrice() * 0.79
    }
}
