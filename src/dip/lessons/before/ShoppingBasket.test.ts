import { ShoppingBasket } from "./ShoppingBasket";

describe('ShoppingBasket Test', () => {
    it('should be saved on SQL and pay by Credit Card', () => {
        const shoppingBasket = new ShoppingBasket();
        expect(shoppingBasket.buy("item1")).toBe("item1 saved on SQL\nitem1 pay with credit card")
    });
})
