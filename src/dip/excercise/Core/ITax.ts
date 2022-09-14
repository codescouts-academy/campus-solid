import { IProduct } from "./IProduct";

export interface ITax {
  getTax(product: IProduct): number;
}