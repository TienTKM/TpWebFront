import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';

const routes: Routes = [
  { path: 'ticket', component: TicketListComponent },
  { path: 'ticket/add', component: TicketAddComponent },
  { path: 'ticket/:id', component: EditTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
