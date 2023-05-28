import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { SharedModule } from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ContactAddComponent } from './contact-add/contact-add.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
  ]
})
export class ContactsModule { }
