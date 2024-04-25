import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';

const routes: Routes = [
  { path: 'ticket', component: TicketListComponent },
  { path: 'ticket/add', component: TicketAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
