export class ShoppingBasket {
    constructor(private Persistence: IPersistence, private Payment: IPayment) {}

    public buy(item: string): string {
        let transaction = ''
        transaction += this.Persistence.save(item)
        transaction += this.Payment.pay(item)
        return transaction
    }
}
