import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { Ticket, Statut } from '../ticket';
import { Commentaire } from '../commentaire';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  ticket!: Ticket;
  statuts = Object.values(Statut);
  newCommentaire: Commentaire = new Commentaire();

  constructor(private route: ActivatedRoute, private router: Router, private ticketService: TicketService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      throw new Error('ID is null');
    }
    const numericId = +id;
    this.ticketService.getTicket(numericId).subscribe(ticket => this.ticket = ticket);
    this.newCommentaire.auteur = { id: 0, username: '' };
  }

  save() {
    if (typeof this.ticket.tags === 'string' || this.ticket.tags instanceof String) {
      this.ticket.tags = (this.ticket.tags as unknown as string).split(',').map(tag => tag.trim());
    }
    this.ticketService.updateTicket(this.ticket).subscribe(() => this.router.navigate(['/ticket']));
  }
}