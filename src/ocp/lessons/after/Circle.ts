export class Circle implements IShape2 {
  constructor(public Radius: number) {}

  getArea(): number {
    return this.Radius * this.Radius * Math.PI;
  }
}
