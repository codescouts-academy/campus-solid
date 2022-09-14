import { Market } from "./Market";

export interface IFullPrinter {
  Print(productIds: number[], market: Market): string;
}