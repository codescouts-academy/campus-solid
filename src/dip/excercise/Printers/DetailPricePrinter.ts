import { IDetailPricePrinter } from '../Core/IDetailPricePrinter'
import { IProductInfo } from '../Core/IProductInfo';
import { Market } from '../Core/Market';

export class DetailPricePrinter implements IDetailPricePrinter {
    constructor(private products: IProductInfo[]) {}

    printDetailPrice(productIds: number[], market: Market): string {
        const productToList = this.products.filter(prod => productIds.includes(prod.getID())) ?? [];
        return productToList.reduce((text, prod) => text + prod.getInformation(market) + "\n", "");
    }
}
