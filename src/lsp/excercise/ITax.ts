import { Product } from "./Product";

export interface ITax {
  getTax(product: Product): number;
}