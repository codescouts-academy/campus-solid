export class Cash implements IPayment {
  public pay(item: string): string {
    return `${item} pay with cash`
  }
}