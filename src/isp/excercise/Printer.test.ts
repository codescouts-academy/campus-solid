import { DetailPricePrinter } from './DetailPricePrinter'
import { Market } from './Market'
import { TaxByLimit } from './TaxByLimit'
import { TitleProduct } from './TitleProduct'
import { TotalPricePrinter } from './TotalPricePrinter'

describe('Printers tests', () => {
    const getMarketByLimit = () => {
        const tax = new TaxByLimit(100)
        return new Market('DE', tax)
    }

    const getListOfProducts = () => {
      const list = [];
      list.push(new TitleProduct(1, "N1", 200));
      list.push(new TitleProduct(2, "N2", 100));
      list.push(new TitleProduct(3, "N3", 300));
      return list;
    }

    const getProductsIds = () => [1, 2, 3]

    test('should print the total amount of a list of products by Market', () => {
      const printer = new TotalPricePrinter(getListOfProducts());
      const result = printer.printTotalPrice(getProductsIds(), getMarketByLimit());
      expect(result).toBe("TOTAL 1179");
    })

    test('should print the detailed prices of a list of products by Market', () => {
      const printer = new DetailPricePrinter(getListOfProducts());
      const result = printer.printDetailPrice(getProductsIds(), getMarketByLimit());
      expect(result).toBe("N1 400\nN2 179\nN3 600\n");
    })
})
