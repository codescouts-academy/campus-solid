import { Apple } from "./Apple";
import { Orange } from "./Orange";

describe('Fruit Color tests', () => {
    it('should return "Red" for Apple', () => {
        const apple = new Apple();
        expect(apple.getColor()).toBe("Red")
    });

    it('should return "Orange" for Orange', () => {
        const orange = new Orange();
        expect(orange.getColor()).toBe("Orange")
    });
})
