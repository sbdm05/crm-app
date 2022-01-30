import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';



@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientComponent,
    PageEditClientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientsModule { }
