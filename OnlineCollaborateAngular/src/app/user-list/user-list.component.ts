import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import {DataTablesModule} from 'angular-datatables';
import { error } from 'protractor';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userservice:UserService) { }

  userArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  users: Observable <User[]>;
  user: User = new User();
  deleteMessage = false;
  userlist: any;
  isupdated = false;


  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.userservice.getUserList().subscribe((data) => {
      this.users = data;
      this.dtTrigger.next();
    })
  }
  deleteUser(userId: number) {
    this.userservice.deleteUser(userId)
    .subscribe(
      data =>{
        console.log(data);
        this.deleteMessage=true;
        this.userservice.getUserList().subscribe(data =>{
          this.users = data
        })
      },
      error => console.log(error));
  }
  updateUser(userId: number){
    this.userservice.getUser(userId)
    .subscribe(
      data => {
        this.userlist=data
      },
      error => console.log(error));
  }
  userupdateform=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    role:new FormControl(),
    password:new FormControl(),
    status:new FormControl(),
    isOnline:new FormControl(),
    enabled:new FormControl()
  });
  updateUsers(updateUsers){
    this.user=new User();
    this.user.userId=this.UserId.value;
    this.user.firstName=this.UserFirstName.value;
    this.user.lastName=this.UserLastName.value;
    this.user.email=this.UserEmail.value;
    this.user.role=this.UserRole.value;
    this.user.password=this.UserPassword.value;
    this.user.status=this.UserStatus.value;
    this.user.isOnline=this.UserOnline.value;
    this.user.enabled=this.UserEnabled.value;
    console.log(this.UserFirstName.value);

    this.userservice.updateUser(this.user.userId,this.user).subscribe(
      data => {
        this.isupdated=true;
        this.userservice.getUserList().subscribe(data =>{
          this.users= data
        })
      },
      error => console.log(error));
  }
  get UserId(){
    return this.userupdateform.get('userId');
  }
  get UserFirstName(){
    return this.userupdateform.get('firstName');
  }
  get UserLastName(){
    return this.userupdateform.get('lastName');
  }
  get UserEmail(){
    return this.userupdateform.get('email');
  }
  get UserRole(){
    return this.userupdateform.get('role');
  }
  get UserPassword(){
    return this.userupdateform.get('password');
  }
  get UserStatus(){
    return this.userupdateform.get('status');
  }
  get UserOnline(){
    return this.userupdateform.get('isOnline');
  }
  get UserEnabled(){
    return this.userupdateform.get('enabled');
  }
  changeisUpdated(){
    this.isupdated=false;
  }

}


 

