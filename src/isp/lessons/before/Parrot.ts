export class Parrot implements IBird {
    Fly(): string {
        return "I Can Flyyy!!"
    }

    Swim(): string {
        throw new Error('Method not implemented.')
    }
}
