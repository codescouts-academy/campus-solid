import { ITax } from '../Core/ITax'
import { TaxByDay } from './TaxByDay';
import { TaxByLimit } from './TaxByLimit'

export class TaxFactory {
    static getInstance(typeOfTax: string): ITax {
        switch (typeOfTax) {
            case 'Limit-100':
              return new TaxByLimit(100);
            case 'WeekDay':
              return new TaxByDay();
            default:
                throw new Error("Not Implemented");
        }
    }
}
