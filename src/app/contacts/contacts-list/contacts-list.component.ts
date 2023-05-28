import { Component, OnInit } from '@angular/core';
// import { CONTACTS } from 'src/app/data/contacts-data';
import { ContactModel } from 'src/app/models/contact-model';
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  protected contacts: ContactModel[] = [];

  private sub = new Subscription;
  
  constructor(private contactsService: ContactsService) {
    // alert('constructor');
  }
  
  ngOnInit(): void {
    // alert('ngOnInit');
    this.getContacts();
  }

  getContacts(): void {
    const mySub = this.contactsService.getContactsService().subscribe(res => {
      console.log(res);
      this.contacts = res;
    });
    this.sub.add(mySub);
  }

  delContact(id: number) {
    const conf = confirm('Czy na 100% chcesz usunąć ten wpis?');
    // console.log(conf);
    if(conf) {
      const mySub = this.contactsService.removeContact(id).subscribe(res => {

        this.getContacts();

      });
      this.sub.add(mySub);
    }
    // alert(id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
