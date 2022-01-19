import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor () {}

  isLoggedIn(){
    const remail= localStorage.getItem("remail")
    const rpass= localStorage.getItem("rpass")
    const email= localStorage.getItem("email")
    const pass= localStorage.getItem("pass")
    

    if( remail===null){
      window.alert("Kindly login and register to view this page");
      return false;
    }
    else if(remail===email && rpass===pass){
      window.confirm("login succesful, want to navigate through Dashboard?")
      return true;
    }else{
      window.alert("login failed, please verify your email and password in registration and login");
    return false
    }
  }

}
