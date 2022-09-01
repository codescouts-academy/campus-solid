export class CreditCard implements IPayment {
  public pay(item: string): string {
    return `${item} pay with credit card`
  }
}