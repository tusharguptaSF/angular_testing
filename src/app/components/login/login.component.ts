import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginUser } from '../../model/LoginUser';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RouterService } from '../../services/router.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  loginUser:LoginUser;
  errorMsg:string;

  constructor(private fb: FormBuilder, private router:RouterService, private authService:AuthService) {
    // new FormGroup({
    //     email: new FormControl('',Validators.required),
    //     password:new FormControl('')
    // });
    this.loginform = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(5)]],
      password: ['', [Validators.required,Validators.minLength(5)]]
    })
  }

  validateUser(){
   // console.log("Form Submitted");
    this.loginUser = this.loginform.value;
   // console.log(this.loginUser);

   let tokenObs:Observable<any> = this.authService.authenticateUser(this.loginUser);

   tokenObs.subscribe(data =>{
      console.log(data);  
      this.authService.addToken(data['token']);
        this.router.routeToDashboard();
   },err=>{
      console.log(err);
      this.errorMsg = 'Invalid Credentials! Retry'
      this.router.routeToLogin();
   });
  }

  get form(){
    return this.loginform.controls;
  }

  ngOnInit() {
  }

}
