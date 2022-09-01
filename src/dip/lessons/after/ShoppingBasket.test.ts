import { Cash } from "./Cash";
import { CreditCard } from "./CreditCard";
import { MongoDatabase } from "./MongoDatabase";
import { ShoppingBasket } from "./ShoppingBasket";
import { SqlDatabase } from "./SqlDatabase";

describe('ShoppingBasket Test', () => {
    it('should be saved on SQL and payed by Cash', () => {
        const sqlDatabase = new SqlDatabase();
        const creditCards = new CreditCard();
        const shoppingBasket = new ShoppingBasket(sqlDatabase, creditCards);
        expect(shoppingBasket.buy("item1")).toBe("item1 saved on SQL\nitem1 pay with credit card")
    });

    it('should be saved on Mongo and payed by Cash', () => {
        const mongoDatabase = new MongoDatabase();
        const cash = new Cash();
        const shoppingBasket = new ShoppingBasket(mongoDatabase, cash);
        expect(shoppingBasket.buy("item1")).toBe("item1 saved on Mongo\nitem1 pay with cash")
    });
})
