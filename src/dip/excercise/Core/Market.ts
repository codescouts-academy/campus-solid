import { IProduct } from "./IProduct";
import { ITax } from "./ITax";

export class Market {
    constructor(private countryCode: string, private tax: ITax) {}

    getMarketTax(product: IProduct): number {
        return this.tax.getTax(product);
    }
}
