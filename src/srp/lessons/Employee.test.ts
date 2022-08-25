import { EmployeeFaçade } from './after/EmployeeFaçade'
import { Employee } from './before/Employee'

const NORMAL_HOURS = 8
const monday = new Date(2022, 8, 22)
const tuesday = new Date(2022, 8, 23)
const employee1 = new Employee()
const employee2 = new EmployeeFaçade()

describe('calculatePay Method', () => {
    test.each([[employee1], [employee2]])(
        'should return 10.2 per 8 hours on Monday',
        (employee) => {
            const result = employee.calculatePay(NORMAL_HOURS, monday)
            expect(result).toBe(10.2)
        }
    )

    test.each([[employee1], [employee2]])(
        'should return 9.6 per 8 hours on Tuesday',
        (employee) => {
            const result = employee.calculatePay(NORMAL_HOURS, tuesday)
            expect(result).toBe(9.6)
        }
    )
})

describe('reportHours Method', () => {
    test.each([[employee1], [employee2]])(
        'should return true on Monday per 8 hours',
        (employee) => {
            const result = employee.reportHours(NORMAL_HOURS, monday)
            expect(result).toBe(true)
        }
    )

    test.each([[employee1], [employee2]])(
        'should return false on Tuesday per 8 hours',
        (employee) => {
            const result = employee.reportHours(NORMAL_HOURS, tuesday)
            expect(result).toBe(false)
        }
    )
})

describe('save Method', () => {
    test.each([[employee1], [employee2]])(
        'should return "EMPLOYEE SAVED in DB"',
        (employee) => {
            const result = employee.save()
            expect(result).toBe('EMPLOYEE SAVED in DB')
        }
    )
})
