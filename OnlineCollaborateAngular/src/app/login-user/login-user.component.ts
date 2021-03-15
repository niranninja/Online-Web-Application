import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { error } from 'selenium-webdriver';
import { DataTablesModule } from 'angular-datatables';
import { map, shareReplay } from 'rxjs/operators';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  hide:any;

  user : User=new User();
  currentUser : any;  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }

  loginform=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })
/* submitForm(){
   let formValue = this.loginform.value;
   let userName = formValue.userName;
   let password = formValue.password;
   let blog = formValue.blog
   console.log(this.loginform.value);
   var reqBody = {
     userName : userName,
     password: password
   }
   this._userService(reqBody).subscribe((result) =>{

   },
   (error) => {

   })
   
 } */

  validateUser() {
    this.user=new User();
    this.user.userName=this.Username.value;
    this.user.password=this.Password.value;
    
    this.userService.CheckUser(this.user).subscribe (
      data => {
        console.log(data);
        if(data!=null) {
          this.currentUser=data;
         if(this.currentUser.role==="Admin"){
           this.router.navigateByUrl("/admin-nav/id");
         }
         else{
          this.router.navigateByUrl("/user-nav/id"+`${this.currentUser.userId}`);
         }
        }
        else {
          console.log("Object Empty");
        }
      },
      error => console.log(error)
    )
  }

  get Username() {
    return this.loginform.get ('userName');
  }

  get Password() {
    return this.loginform.get ('password');
  }
}
