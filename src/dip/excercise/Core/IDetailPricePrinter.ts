import { Market } from "./Market";

export interface IDetailPricePrinter {
  printDetailPrice(productIds: number[], market: Market): string;
}