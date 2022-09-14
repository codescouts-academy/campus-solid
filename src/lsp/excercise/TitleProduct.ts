import { IProductInfo } from './IProductInfo'
import { Market } from './Market'
import { Product } from './Product'

export class TitleProduct extends Product implements IProductInfo {
    getInformation(market: Market): string {
        const currentPrice = this.getPrice() + market.getMarketTax(this);
        return `${this.title.toUpperCase()} ${currentPrice}`;
    }
}
