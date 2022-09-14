import { Market } from './Market'
import { Product } from './Product'
import { TaxByDay } from './TaxByDay'
import { TaxByLimit } from './TaxByLimit'

describe('Compute Tax by Market logic', () => {
    jest.useFakeTimers()

    const getMarketByLimit = () => {
        const tax = new TaxByLimit(100)
        return new Market('DE', tax)
    }

    test('should return full price of the product when the price is bigger than the market limit', () => {
        const product = new Product('Expensive', 120)
        const result = getMarketByLimit().getMarketTax(product)
        expect(result).toBe(120)
    })

    test('should return 79% of price when the product price is lesser than the market limit', () => {
        const product = new Product('Cheap', 100)
        const result = getMarketByLimit().getMarketTax(product)
        expect(result).toBe(79)
    })

    const getMarketByDate = () => {
        const tax = new TaxByDay()
        return new Market('US', tax)
    }

    test('should return 10% of product price for Sunday', () => {
        const mockSunday = new Date('2022-09-04')
        jest.setSystemTime(mockSunday.getTime())
        const product = new Product('Normal', 100)
        const result = getMarketByDate().getMarketTax(product)
        expect(result).toBe(10)
    })

    test('should return 10% of product price for Satursday', () => {
        const mockSunday = new Date('2022-09-03')
        jest.setSystemTime(mockSunday.getTime())
        const product = new Product('Normal', 100)
        const result = getMarketByDate().getMarketTax(product)
        expect(result).toBe(10)
    })

    test('should return 5% of product price for non weekend days', () => {
        const mockSunday = new Date('2022-09-02')
        jest.setSystemTime(mockSunday.getTime())
        const product = new Product('Normal', 100)
        const result = getMarketByDate().getMarketTax(product)
        expect(result).toBe(5)
    })
})
