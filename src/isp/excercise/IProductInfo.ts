import { IProduct } from "./IProduct";
import { Market } from "./Market";

export interface IProductInfo extends IProduct {
  getCurrentPrice(market: Market): number;
  getInformation(market: Market): string;
}