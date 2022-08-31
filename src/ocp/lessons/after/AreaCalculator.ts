export class AreaCalculator {
    public getAreas(shapes: IShape2[]): number {
        let area = 0
        for (const shape of shapes) {
            area += shape.getArea();
        }
        return area
    }
}
