import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from 'src/app/services/router.service';
import {ContactsEditDialogComponent} from '../contacts-edit-dialog/contacts-edit-dialog.component';

@Component({
  selector: 'app-contacts-edit-opener',
  templateUrl: './contacts-edit-opener.component.html',
  styleUrls: ['./contacts-edit-opener.component.css']
})
export class ContactsEditOpenerComponent implements OnInit {

  constructor(public dialog: MatDialog,
      private activatedRoute : ActivatedRoute,
      private routerService :  RouterService
    ) { 
    const  id  = this.activatedRoute.snapshot.params.contactId;
    let ref = this.dialog.open(ContactsEditDialogComponent, {
      data: {
       contId : id
      }
  })
  ref.afterClosed().subscribe(result=>{
    routerService.routeToDashboard();
  })
}

  ngOnInit() {
  }

}
