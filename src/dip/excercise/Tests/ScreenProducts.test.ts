import { Market } from '../Core/Market'
import { PriceProduct } from '../Products/PriceProduct'
import { TitleProduct } from '../Products/TitleProduct'
import { TaxByLimit } from '../Taxes/TaxByLimit'

describe('Screen Product by Product Type', () => {
    const getMarketByLimit = () => {
        const tax = new TaxByLimit(100)
        return new Market('DE', tax)
    }

    test('should return upper case title before current price', () => {
        const product = new TitleProduct(1, 'very expensive', 200)
        const result = product.getInformation(getMarketByLimit())
        expect(result).toBe("VERY EXPENSIVE 400");
    })

    test('should return current price before product title', () => {
      const product = new PriceProduct(1, 'very cheap', 100)
      const result = product.getInformation(getMarketByLimit())
      expect(result).toBe("179 very cheap");
    })
})
