import { Component } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrl: './ticket-add.component.css',
})
export class TicketAddComponent {
  ticket: Ticket = new Ticket();
  constructor(private ticketService: TicketService) {}
  addTicket() {
    // Post the ticket object using the TicketService save(ticket: Ticket) method
    this.ticketService.save(this.ticket).subscribe((data) => {
      console.log(data);
    });
  }
}
