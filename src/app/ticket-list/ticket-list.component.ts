import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] | undefined;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.findAll().subscribe(data => {
      this.tickets = data;
    });
  }

}
