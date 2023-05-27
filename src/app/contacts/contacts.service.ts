import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) {}

  getContactsService(): Observable<any> {
    return this.httpClient.get('http://contactsapi.loc/contacts');
  }
  
}
