import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.css']
})
export class ContactsViewComponent implements OnInit {
  message: string;
  contactList: Contact[] = [];
  constructor(private service : ContactService) {  this.service.getAllContacts().subscribe(
    resp=>{
      this.contactList = resp;
    },
    error=>{this.message = error.message})
}
  ngOnInit() {
  }

}
