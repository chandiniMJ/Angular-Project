import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public rtr: Router) { }
  SignInForm=new FormGroup(
    {
      remail:new FormControl("",[Validators.required, Validators.minLength(8), Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}") ]),
      rpass:new FormControl("",[Validators.required, Validators.minLength(8), Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")])
    }
  )

  get remail(){
    return this.SignInForm.get('remail');
  }

  get rpass(){
    return this.SignInForm.get('rpass');
  }
  signIn(){
    console.log(this.SignInForm.value);
    localStorage.setItem("remail",JSON.stringify(this.SignInForm.value.remail))
    localStorage.setItem("rpass",JSON.stringify(this.SignInForm.value.rpass))
    this.rtr.navigate(["userDashboard"])
  }
 

  ngOnInit(): void {
  }
}
