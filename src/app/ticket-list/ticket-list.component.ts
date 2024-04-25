import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {
  tickets: any = [];
  auteurNom: string = '';

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.findAll().subscribe(data => {
      this.tickets = data;
      this.tickets.forEach((ticket: { auteurNom: any; auteur: any; }) => {
        ticket.auteurNom = ticket.auteur.username;
      });
    });
  }
}
