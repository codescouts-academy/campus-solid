import { Market } from "./Market";

export interface ITotalPricePrinter {
  printTotalPrice(productIds: number[], market: Market): string;
}