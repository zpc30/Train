import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ticket, TicketList } from '../model/ticket.model';
import { Station, Train, TrainList } from '../model/train.model';

const baseUrl = 'http://localhost:3000/api/trains'
const stationUrl = 'http://localhost:3000/api/stations'
const ticketsUrl = 'http://localhost:3000/api/tickets'

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private httpClient: HttpClient) { }

  getAll(params?:any): Observable<TrainList> {
    let options = {
      params: new HttpParams()
        .set('filter', params.filter && JSON.stringify(params.filter) || [])
    }
    return this.httpClient.get(baseUrl,options).pipe(map((data:any)=> {
      return new TrainList(data)
    }))
  }
  getStation(): Observable<Station[]> {
    return this.httpClient.get(stationUrl).pipe(map((data:any)=> {
      return data && data.map((el:any)=> new Station(el))
    }))
  }
  getTrain(id:number):Observable<Train> {
    return this.httpClient.get(baseUrl + '/' + id).pipe(map((data:any)=> {
      return new Train(data)
    }))
  }
  getTicket(): Observable<TicketList> {
    return this.httpClient.get(ticketsUrl).pipe(map((data:any)=> {
      return new TicketList(data)
    }))
  }
  postTicket(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.post(ticketsUrl, ticket).pipe(map((data:any)=> {
      return new Ticket(data)
    }))
  }
  deleteTicket(id: number): Observable<Ticket> {
    return this.httpClient.delete(ticketsUrl+ '/' + id).pipe(map((data:any)=> {
      return new Ticket(data)
    }))
  }
}
