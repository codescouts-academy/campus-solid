export class Rectangle implements IShape2 {
    constructor(public Width: number, public Height: number) {}

    getArea(): number {
        return this.Height * this.Width;
    }
}
