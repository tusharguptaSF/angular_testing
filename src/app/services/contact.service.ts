import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../model/contact';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';



const contactUrl = 'http://localhost:3000/api/v1/contacts';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactList : Contact[] = [];
  subject : BehaviorSubject<Contact[]> = new BehaviorSubject(this.contactList);
  constructor(private http: HttpClient,private authService : AuthService){
    this.fetchContactsFromServer();
  }

  addContact(contact : Contact) : Observable<Contact>{
   return   this.http.post<Contact>(contactUrl,contact,{
    headers:new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`)
  }).pipe(
    tap(contact=>{
      this.contactList.push(contact);
      this.subject.next(this.contactList)
    })
  )
  }

  fetchContactsFromServer(){
    return this.http.get<Contact[]>(contactUrl,{
      headers:new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`)
    }).subscribe(contacts=>{
      this.contactList = contacts;
      this.subject.next(this.contactList);
    })
  }

  getAllContacts():Observable<Contact[]>{
    return this.subject;
  }
  getContactById(id:any){
    const c = this.contactList.find(cont=>cont.id==id);
    //Create a copy of contact instance  and return the instance
    return Object.assign({},c);
  }
  saveContact(contact:Contact){
    return this.http.put(`${contactUrl}/${contact.id}`,contact,{
      headers:new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`)
    }).pipe(tap(updContact=>{
      let contFromContactList = this.contactList.find(cont=>cont.id==contact.id);
      Object.assign(contFromContactList,contact);
      this.subject.next(this.contactList);
    }))
  }
















}
