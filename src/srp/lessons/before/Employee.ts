export class Employee implements IEmployee {
    private readonly REGULAR_HOURS_PRICE = 1.2
    private readonly EXTRA_HOURS_PRICE = 1.5
    public readonly NAME = 'EMPLOYEE'

    private regularHours(date: Date) {
        return date.getDay() % 2 ? 8 : 6
    }

    public calculatePay(hours: number, date: Date): number {
        const regularHours = this.regularHours(date)
        const extraHours = hours - regularHours
        return (
            extraHours * this.EXTRA_HOURS_PRICE +
            regularHours * this.REGULAR_HOURS_PRICE
        )
    }

    public reportHours(hours: number, date: Date): boolean {
        const regularHours = this.regularHours(date)
        return !(hours <= regularHours)
    }

    public save() {
        return `${this.NAME} SAVED in DB`
    }
}
