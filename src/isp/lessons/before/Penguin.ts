export class Penguin implements IBird {
    Fly(): string {
        throw new Error('Method not implemented.')
    }

    Swim(): string {
        return 'I can Swiiiiim!!!'
    }
}
