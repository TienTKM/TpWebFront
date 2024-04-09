import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from './ticket';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private ticketsUrl: string;

  constructor(private http: HttpClient) {
    this.ticketsUrl = 'http://localhost:8080/ticket';
  }

  public findAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketsUrl);
  }

  public save(ticket: Ticket) {
    return this.http.post<Ticket>(this.ticketsUrl, ticket);
  }
}
