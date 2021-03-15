import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NewUser} from '../../model/NewUser'
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  cities: string[] = ['Bangalore', 'Delhi', 'Mysore', 'Chennai', 'Kolkata']
  user: NewUser;
  errMsg: string;

  constructor(private authService:AuthService, private router:Router) {
    this.user = new NewUser();
  }

  ngOnInit() { }

  onSignUp(form:NgForm){
    // console.log("Submitted");
    // console.log(this.user);
    // console.log(form);
    // if(this.authService.addUser(this.user)){
    //   this.router.navigate(['login']);
    // }else{
    //   this.errMsg = 'Username taken! Retry with new username'
    //   this.router.navigate(['signup']);
    // }
  }

}
