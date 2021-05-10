import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../model/contact';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  createContact(contact: Contact): Observable<Contact>
  {
      return this.http.post<Contact>(`${environment.hostUri}:8081/contacts/`, contact);
  }
}
