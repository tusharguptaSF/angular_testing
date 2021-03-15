import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @Input()
  contact : Contact
  constructor(private service:RouterService) { }

  ngOnInit() {
  }
  editContactOpener(){
    this.service.routerToEdit(this.contact.id);
  }
}
