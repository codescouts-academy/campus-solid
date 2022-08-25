export class PayCalculator {
    private readonly REGULAR_HOURS_PRICE = 1.2
    private readonly EXTRA_HOURS_PRICE = 1.5

    public calculatePay(hours: number, date: Date): number {
        const regularHours = date.getDay() % 2 ? 8 : 6
        const extraHours = hours - regularHours
        return (
            extraHours * this.EXTRA_HOURS_PRICE +
            regularHours * this.REGULAR_HOURS_PRICE
        )
    }
}
