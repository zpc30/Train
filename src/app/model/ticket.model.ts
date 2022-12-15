export class TicketList {
    count: number;
    results: Ticket[]
    constructor(obj?:any) {
        this.count = obj && obj.count || null;
        this.results = obj && obj.results && obj.results.map((el:any)=> new Ticket(el)) || [];
    }
}

export class Ticket {
    _id: number;
    number: number;
    from: string;
    departure: Date;
    to: string;
    arrival: Date;
    price: number;
    name: string;
    birthDate: Date;
    constructor(obj?:any) {
        this._id = obj && obj._id || null
        this.number = obj && obj.number || null
        this.from = obj && obj.from || ''
        this.departure = obj && obj.departure || null
        this.to = obj && obj.to || ''
        this.arrival = obj && obj.arrival || null
        this.price = obj && obj.price || null
        this.name = obj && obj.name || ''
        this.birthDate = obj && obj.birthDate || null
    }
}