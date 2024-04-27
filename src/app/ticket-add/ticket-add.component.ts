import { Component } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css'],
})
export class TicketAddComponent {
  username: string = '';
  titre: string = '';
  demande: boolean = false;
  discussion: boolean = false;

  constructor(private ticketService: TicketService) {}

  addTicket() {
    let utilisateur: Utilisateur = new Utilisateur(this.username);
    let ticket: Ticket = new Ticket(utilisateur, new Date(), this.titre, this.demande, true);

    this.ticketService.save(ticket).subscribe((data) => {
      console.log(data);
    });
  }
}