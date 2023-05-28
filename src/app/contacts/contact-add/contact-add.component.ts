import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit{

  protected addForm: any = this.fb.group({});
  
  private sub = new Subscription;

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private router: Router
    ) {}

  ngOnInit(): void {
    const surnamePattern = '^[A-ż]{3,20}$';
    const firstNamePattern = '^[A-ż]{3,20}$';
    const phoneNumberPattern = '^[0-9]{8}';

    this.addForm = this.fb.group({
      surname: ['', [Validators.required, Validators.pattern(surnamePattern)]],
      firstName: ['', [Validators.required, Validators.pattern(firstNamePattern)]],
      // phoneNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
      phoneNumber: ['', [Validators.required, Validators.pattern(phoneNumberPattern)]]
    });
  }

  saveContact(): void {
    const mySub = this.contactsService.addContact(this.addForm.value).subscribe(res => {
      this.router.navigate(['/contacts-list']);
    });
    this.sub.add(mySub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
