import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import { ContactsViewComponent } from './components/contacts-view/contacts-view.component';
import { ContactsEditOpenerComponent } from './components/contacts-edit-opener/contacts-edit-opener.component';

const approutes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path: 'gridview',
        component: ContactsViewComponent
      },
      {
        path: 'contact/edit/:contactId',
        component: ContactsEditOpenerComponent,
        outlet:'editoutlet'
      },
      {
        path : '',
        redirectTo:'gridview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path : '',
    redirectTo:'/login',
    pathMatch: 'full'
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(approutes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
