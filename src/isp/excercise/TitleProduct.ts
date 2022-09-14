import { IProductInfo } from './IProductInfo'
import { Market } from './Market'
import { Product } from './Product'

export class TitleProduct extends Product implements IProductInfo {
    getCurrentPrice(market: Market): number {
        return this.getPrice() + market.getMarketTax(this)
    }
    getInformation(market: Market): string {
        return `${this.title.toUpperCase()} ${this.getCurrentPrice(market)}`
    }
}
