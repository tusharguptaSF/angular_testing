import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-edit-dialog',
  templateUrl: './contacts-edit-dialog.component.html',
  styleUrls: ['./contacts-edit-dialog.component.css']
})
export class ContactsEditDialogComponent implements OnInit {
contact : Contact;
  constructor(@Inject(MAT_DIALOG_DATA) public data, 
   private contactService: ContactService,
   private ref : MatDialogRef<ContactsEditDialogComponent>
   ) { 
    const id = this.data.contId;
    this.contact = this.contactService.getContactById(id);
  }

  ngOnInit() {
  }
  updateContact(){
    this.contactService.saveContact(this.contact).
    subscribe(
      data=>{console.log(data);
        this.ref.close();}
        
    
    
    )
  }
}
