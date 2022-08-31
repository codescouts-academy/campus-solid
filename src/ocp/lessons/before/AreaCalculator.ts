import { Circle } from './Circle'
import { Rectangle } from './Rectangle'

export class AreaCalculator {
    public getAreas(shapes: IShape[]): number {
        let area = 0
        for (const shape of shapes) {
            if (shape instanceof Rectangle) {
                const rectangle = shape as Rectangle
                area += rectangle.Width * rectangle.Height
            } else {
                const circle = shape as Circle
                area += circle.Radius * circle.Radius * Math.PI
            }
        }
        return area
    }
}
