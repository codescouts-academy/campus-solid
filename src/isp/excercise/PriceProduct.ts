import { IProductInfo } from './IProductInfo'
import { Market } from './Market'
import { Product } from './Product'

export class PriceProduct extends Product implements IProductInfo {
    getCurrentPrice(market: Market): number {
        return this.getPrice() + market.getMarketTax(this)
    }
    getInformation(market: Market): string {
        return `${this.getCurrentPrice(market)} ${this.title}`
    }
}
