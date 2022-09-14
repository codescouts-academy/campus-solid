import { IProductInfo } from './IProductInfo'
import { Market } from './Market'
import { Product } from './Product'

export class PriceProduct extends Product implements IProductInfo {
    getInformation(market: Market): string {
        const currentPrice = this.getPrice() + market.getMarketTax(this)
        return `${currentPrice} ${this.title}`
    }
}
