import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public rtr: Router) { }

  LoginForm=new FormGroup(
    {
      email:new FormControl("",[Validators.required, Validators.minLength(8), Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}") ]),
      pass:new FormControl("",[Validators.required, Validators.minLength(8), Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")])
    }
  )

  get email(){
    return this.LoginForm.get('email');
  }

  get pass(){
    return this.LoginForm.get('pass');
  }
  login(){
    console.log(this.LoginForm.value);
    localStorage.setItem("email",JSON.stringify(this.LoginForm.value.email))
    localStorage.setItem("pass",JSON.stringify(this.LoginForm.value.pass))
    this.rtr.navigate(["registration"])
    
  }
  
  

  ngOnInit(): void {
  }
}
