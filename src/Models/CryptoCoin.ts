export class CryptoCoin {
    public id: string
    public symbol: string
    public name: string
    public price: number
    public image: string
    public date: Date

    constructor(id: string, symbol: string, name: string, price: number, image: string, date: Date) {
        this.id = id
        this.symbol = symbol
        this.name = name
        this.price = price
        this.image = image
        this.date = date
    }
}
