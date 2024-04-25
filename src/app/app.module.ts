import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketService } from './ticket.service';
import { HttpClientModule } from '@angular/common/http';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [ 
  { path: 'ticket', component: TicketListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    TicketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
