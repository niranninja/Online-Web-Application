import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { User} from '../user';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  
  constructor(private userservice:UserService) { }

  user : User=new User();  
  submitted = false;  


  ngOnInit(): void {
    this.submitted=false;
  }
  registrationform=new FormGroup({  
    firstName:new FormControl('' , [Validators.required] ),  
    lastName:new FormControl('' , [Validators.required] ),  
    userName:new FormControl('' , [Validators.required] ),  
    password:new FormControl('' , [Validators.required] ),  
    confirmPassword:new FormControl('' , [Validators.required]),  
    email:new FormControl('',[Validators.required,Validators.email]),  
    role:new FormControl()
     
  });  
  registerUser(registerUser){
    this.user=new User();
    this.user.firstName=this.UserFirstname.value;
    this.user.lastName=this.UserLastname.value;
    this.user.userName=this.UserName.value;
    if(this.UserPassword.value===this.UserConfirmPassword.value)
      this.user.password=this.UserPassword.value;
    this.user.email=this.UserEmail.value;
    this.user.role=this.UserRole.value;
    if(this.user.role==="Admin"){
      this.user.enabled="true";
      this.user.status="Active"
    }
    else{
      this.user.enabled="false";
      this.user.status="Inactive"
    }
    this.user.isOnline="false";
    this.submitted=true;
    console.log(this.user.firstName);
    this.save();
  }
  save(){
    this.userservice.createUser(this.user)
    .subscribe(data=> console.log(data), error => console.log(error));
    this.user= new User();
  }

  get UserFirstname(){
    return this.registrationform.get('firstName');
  }
  get UserLastname(){
    return this.registrationform.get('lastName');
  }
  get UserName(){
    return this.registrationform.get('userName');
  }
  get UserPassword(){
    return this.registrationform.get('password');
  }
  get UserConfirmPassword(){
    return this.registrationform.get('confirmPassword');
  }
  get UserEmail(){
    return this.registrationform.get('email')
  }
  get UserRole(){
    return this.registrationform.get('role');
  }
  addRegistrationForm(){
    this.submitted=false;
    this.registrationform.reset();
  }
}



