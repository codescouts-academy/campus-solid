import { Market } from "./Market";

export interface IProductInfo {
  getInformation(market: Market): string;
}