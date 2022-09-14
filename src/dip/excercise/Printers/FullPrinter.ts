import { IDetailPricePrinter } from '../Core/IDetailPricePrinter'
import { IFullPrinter } from '../Core/IFullPrinter'
import { ITotalPricePrinter } from '../Core/ITotalPricePrinter'
import { Market } from '../Core/Market'

export class FullPrinter implements IFullPrinter {
    constructor(
        private detailPrinter: IDetailPricePrinter,
        private totalPrinter: ITotalPricePrinter
    ) {}
    Print(productIds: number[], market: Market): string {
        let text = ''
        text += this.detailPrinter.printDetailPrice(productIds, market) + '\n'
        text += this.totalPrinter.printTotalPrice(productIds, market)
        return text
    }
}
