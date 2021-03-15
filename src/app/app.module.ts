import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ContactsNavComponent } from './components/contacts-nav/contacts-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactsAddComponent } from './components/contacts-add/contacts-add.component';
import { ContactsViewComponent } from './components/contacts-view/contacts-view.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsEditOpenerComponent } from './components/contacts-edit-opener/contacts-edit-opener.component';
import { ContactsEditDialogComponent } from './components/contacts-edit-dialog/contacts-edit-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ContactsNavComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ContactsAddComponent,
    ContactsViewComponent,
    ContactsComponent,
    ContactsEditOpenerComponent,
    ContactsEditDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,  
    FormsModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ContactsEditDialogComponent]
})
export class AppModule { }
