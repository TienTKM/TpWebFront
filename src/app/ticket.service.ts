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
  private ticketUpdateUrl: string;

  constructor(private http: HttpClient) {
    this.ticketsUrl = 'http://localhost:8080/ticket';
    this.ticketAddUrl = 'http://localhost:8080/ticket/add';
    this.ticketUpdateUrl = 'http://localhost:8080/ticket/update';
  }

  public findAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketsUrl);
  }

  public save(ticket: Ticket) {
    return this.http.post<Ticket>(this.ticketAddUrl, ticket);
  }

  public getTicket(id: number): Observable<Ticket> {
    const url = `${this.ticketsUrl}/${id}`;
    return this.http.get<Ticket>(url);
  }

  public updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.ticketUpdateUrl}/${ticket.id}`, ticket);
  }
}
