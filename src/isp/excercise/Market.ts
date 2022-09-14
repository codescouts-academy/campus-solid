import { ITax } from "./ITax";
import { Product } from "./Product";

export class Market {
    constructor(private countryCode: string, private tax: ITax) {}

    getMarketTax(product: Product): number {
        return this.tax.getTax(product);
    }
}
