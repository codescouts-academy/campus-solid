import { Market } from "./Market";
import { Product } from "./Product";
import { TaxCalculator } from "./TaxCalculator";


describe('TaxCalculator logic', () => {
  const market = new Market("DE", 100);

  test('should return full price of the product when the price is bigger than the market limit', () => {
    const product = new Product("Expensive", 120);    
    const result = TaxCalculator.computeTax(product, market);
    expect(result).toBe(120);
  });

  test('should return 79% of price when the product price is lesser than the market limit', () => {
    const product = new Product("Cheap", 100);
    const result = TaxCalculator.computeTax(product, market);
    expect(result).toBe(79);
  });
});