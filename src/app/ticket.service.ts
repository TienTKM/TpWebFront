import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './ticket';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private ticketsUrl: string;
  private ticketAddUrl: string;

  constructor(private http: HttpClient) {
    this.ticketsUrl = 'http://localhost:8080/ticket';
    this.ticketAddUrl = 'http://localhost:8080/ticket/add';
  }

  public findAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketsUrl);
  }

  public save(ticket: Ticket) {
    return this.http.post<Ticket>(this.ticketAddUrl, ticket);
  }
}
