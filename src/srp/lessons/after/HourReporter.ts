export class HourReporter {
    public reportHours(hours: number, date: Date): boolean {
        const regularHours = date.getDay() % 2 ? 8 : 6
        return !(hours <= regularHours)
    }
}
