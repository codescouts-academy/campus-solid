import { IProductInfo } from '../Core/IProductInfo';
import { PriceProduct } from './PriceProduct';
import { TitleProduct } from './TitleProduct';

export class ProductFactory {
    static getInstance(typeOfProduct: string, id: number, price: number, title: string): IProductInfo {
        switch (typeOfProduct) {
            case 'Title':
              return new TitleProduct(id, title, price);
            case 'Price':
              return new PriceProduct(id, title, price);
            default:
                throw new Error("Not Implemented");
        }
    }
}
