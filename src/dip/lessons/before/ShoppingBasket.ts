import { CreditCard } from './CreditCard';
import { SqlDatabase } from './SqlDatabase'

export class ShoppingBasket {
    public buy(item: string): string {
        const db = new SqlDatabase()
        const creditCards = new CreditCard();
        let transaction = ''
        transaction += db.save(item)
        transaction += creditCards.pay(item)
        return transaction
    }
}
