export class Market {
    constructor(private countryCode: string, private limit: number) {}

    getLimit(): number {
        return this.limit
    }
}
