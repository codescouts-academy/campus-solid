import { AreaCalculator as AreaCalculatorAfter } from './after/AreaCalculator';
import { AreaCalculator  } from './before/AreaCalculator'
import { Circle } from './before/Circle';
import { Rectangle } from './before/Rectangle';
import { Circle as CicleAfter } from './after/Circle';
import { Rectangle as RectangleAfter } from './after/Rectangle';

const areaCalculator1 = new AreaCalculator();
const areaCalculator2 = new AreaCalculatorAfter();
const shapes1B = [new Rectangle(2, 2)]
const shapes2B = [new Circle(2)]
const shapes3B = [new Rectangle(3, 4), new Circle(3)]

const shapes1A = [new RectangleAfter(2, 2)]
const shapes2A = [new CicleAfter(2)]
const shapes3A = [new RectangleAfter(3, 4), new CicleAfter(3)]

describe('getAreas Method', () => {
    test.each([[areaCalculator1, shapes1B], [areaCalculator2, shapes1A]])(
        'should return 4 for shapes1',
        (areaCalculator, shapes) => {
            const result = areaCalculator.getAreas(shapes);
            expect(result).toBe(4)
        }
    )

    test.each([[areaCalculator1, shapes2B], [areaCalculator2, shapes2A]])(
        'should return 12.566 for shapes2',
        (areaCalculator, shapes) => {
            const result = areaCalculator.getAreas(shapes);
            expect(result).toBeCloseTo(12.566, 3)
        }
    )

    test.each([[areaCalculator1, shapes3B], [areaCalculator2, shapes3A]])(
        'should return 40.274 for shapes3',
        (areaCalculator, shapes) => {
            const result = areaCalculator.getAreas(shapes);
            expect(result).toBeCloseTo(40.274, 3)
        }
    )
})
