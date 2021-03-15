import { Injectable } from '@angular/core';
import { LoginUser } from '../model/LoginUser';
import { NewUser } from '../model/NewUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl:string = 'http://localhost:3000/auth/v1';
  authUrl:string =  'http://localhost:3000/auth/v1/isAuthenticated';
  constructor(private httpClient:HttpClient) { 
       
  }

  authenticateUser(loginUser:LoginUser){
    //send a post request to server with username and password
    return this.httpClient.post(this.loginUrl,loginUser);
  }

  isAuthenticatedUser(){
    return this.httpClient.post(this.authUrl,{},{
      headers:new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`)
    });
  }

  addUser(newUser:NewUser){
  }

  addToken(token){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
