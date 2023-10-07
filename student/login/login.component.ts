import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username1='user123';
  password='pass123';
  pass2='';
  user2='';
  loginform = new FormGroup({ 
    username:new FormControl(''),
    password:new FormControl('')
  })
  constructor(private router:Router) { }
  ngOnInit() {
  }
  loggedIn()
  { 
    console.warn(this.loginform.value)
    if(this.user2===this.username1 && this.password===this.pass2)
    {
      //this.router.navigate(['/studentlist']);
      alert("login successful");
      this.router.navigate(['/studentlist']);
    }
    else{ alert("invalid credentials"); }
    
  };
  GetUsername(val:string)
  {
    this.user2=val;
  };
  GetUserpassword(val:string)
  {this.pass2=val;};

}
