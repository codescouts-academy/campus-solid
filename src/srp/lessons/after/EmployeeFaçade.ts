import { EmployeeSaver } from './EmployeeSaver'
import { HourReporter } from './HourReporter'
import { PayCalculator } from './PayCalculator'

export class EmployeeFaçade implements IEmployee {
    public readonly NAME = 'EMPLOYEE'

    constructor(
        private calculator = new PayCalculator(),
        private reporter = new HourReporter(),
        private saver = new EmployeeSaver()
    ) { }

    public calculatePay(hours: number, date: Date): number {
        return this.calculator.calculatePay(hours, date)
    }

    public reportHours(hours: number, date: Date): boolean {
        return this.reporter.reportHours(hours, date)
    }

    public save(): string {
        return this.saver.save(this)
    }
}
