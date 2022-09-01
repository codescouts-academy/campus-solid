import { Parrot } from "./Parrot";
import { Penguin } from "./Penguin";


describe('Bird tests', () => {
    let bird: IBird;
    it('should return "I can fly" for Parrot', () => {
        bird = new Parrot();
        expect(bird.Fly()).toBe("I Can Flyyy!!")
    });

    it('should return "I can swim" for Penguin', () => {
        bird = new Penguin();
        expect(bird.Swim()).toBe("I can Swiiiiim!!!")
    });

    it('should return exception for Penguin flying', () => {
        bird = new Penguin();
        expect(bird.Fly).toThrowError("Method not implemented.");
    });

    it('should return exception for Parrot swimming', () => {
        bird = new Parrot();
        expect(bird.Swim).toThrowError("Method not implemented.");
    });
})
