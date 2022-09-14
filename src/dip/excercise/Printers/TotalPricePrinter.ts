import { IProductInfo } from "../Core/IProductInfo"
import { ITotalPricePrinter } from "../Core/ITotalPricePrinter"
import { Market } from "../Core/Market"


export class TotalPricePrinter implements ITotalPricePrinter {
    constructor(private products: IProductInfo[]) {}

    printTotalPrice(productIds: number[], market: Market): string {
        const productToSum =
            this.products.filter((prod) => productIds.includes(prod.getID())) ??
            []
        const totalPrice = productToSum.reduce(
            (acc, prod) => acc + prod.getCurrentPrice(market),
            0
        )
        return `TOTAL ${totalPrice}`
    }
}
