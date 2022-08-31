import { Parrot } from "./Parrot";
import { Penguin } from "./Penguin";


describe('Bird tests', () => {
    it('should return "I can fly" for Parrot', () => {
        const bird: IFlyingBird = new Parrot();
        expect(bird.Fly()).toBe("I Can Flyyy!!")
    });

    it('should return "I can swim" for Pinguin', () => {
        const bird: ISwimmingBird = new Penguin();
        expect(bird.Swim()).toBe("I can Swiiiiim!!!")
    });
})
