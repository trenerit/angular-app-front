import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private baseApiUrl = 'http://contactsapi.loc';

  constructor(private httpClient: HttpClient) {}

  getContactsService(): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}/contacts`);
  }

  removeContact(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseApiUrl}/contact/${id}`);
  } 
  
}
