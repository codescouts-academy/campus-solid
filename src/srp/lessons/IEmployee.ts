interface IEmployee {
    NAME: string
    calculatePay(hours: number, date: Date): number;
    reportHours(hours: number, date: Date): boolean;
    save(): string;
}
