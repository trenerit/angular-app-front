import { Component, OnInit } from '@angular/core';
// import { CONTACTS } from 'src/app/data/contacts-data';
import { ContactModel } from 'src/app/models/contact-model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  protected contacts: ContactModel[] = [];
  
  constructor(private contactsService: ContactsService) {}
  
  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contactsService.getContactsService().subscribe(res => {
      console.log(res);
      this.contacts = res;
    })
  }

}
