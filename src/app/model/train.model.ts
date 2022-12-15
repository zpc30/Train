export class TrainList {
    count: number;
    results: Train[]
    constructor(obj?:any) {
        this.count = obj && obj.count || null;
        this.results = obj && obj.results && obj.results.map((el:any)=> new Train(el))
    }
}

export class Train {
    _id: number;
    number: number;
    from: string;
    departure: Date;
    to: string;
    arrival: Date;
    travels: number;
    type: string;
    price: number;
    stations: Station[];
    constructor(obj?:any) {
        this._id = obj && obj._id || null;
        this.number = obj && obj.number || null;
        this.from = obj && obj.from || '';
        this.departure = obj && obj.departure || null;
        this.to = obj && obj.to || '';
        this.arrival = obj && obj.arrival || null;
        this.travels = obj && obj.travels || null;
        this.type = obj && obj.type || '';
        this.price = obj && obj.price || null;
        this.stations = obj && obj.stations && obj.stations.map((el:any)=> new Station(el)) || [];
    }
}

export class Station {
    name: string;
    arrival: Date;
    departure: Date;
    constructor(obj?:any) {
        this.name = obj && obj.name || null;
        this.arrival = obj && obj.arrival || null;
        this.departure = obj && obj.departure || null;
    }
}