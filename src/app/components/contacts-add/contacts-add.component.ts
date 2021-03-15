import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.css']
})
export class ContactsAddComponent implements OnInit {
  newContact: Contact;
  contactList: Contact[] = [];
  message: string;
  constructor(private service : ContactService) {
    this.newContact = new Contact("","");
   }

  ngOnInit() {
  }
  addNewContact(){
    this.service.addContact(this.newContact).
    subscribe(
      resp=>{
        this.contactList.push(resp);
        this.message = "Contact Added Successfully"
        console.log(resp)
        this.newContact = new Contact("","");
      },error=>{this.message = error.message});
  }
}
