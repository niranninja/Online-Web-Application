import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable, Subject } from 'rxjs';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-activate-users',
  templateUrl: './activate-users.component.html',
  styleUrls: ['./activate-users.component.scss']
})
export class ActivateUsersComponent implements OnInit {

  

  constructor(private userservice: UserService) { }
  
  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<any>= new Subject();
  users:any;
  user: User =new User();
  deactiveList: any;
  isEnabled= false;


  ngOnInit(){
   this.isEnabled= false;
   this.dtOptions={
     pageLength: 6,
     stateSave: true,
     lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
     processing: true
   };
   this.userservice.deactiveList().subscribe(data =>{
     this.users =data;
     this.dtTrigger.next(); 
   }) 
  }

  enabledUser(id: number){
    
    this.userservice.activateUser(id).
    subscribe(
      (data) =>{
        this.deactiveList =data;
        console.log(this.deactiveList);
        this.activateUser(id);

      },
      (error) => console.log(error)
    );
  }

  activeUserForm = new FormGroup({
    userId: new FormControl()
  });

  activateUser(id:number){
    this.user =new User();
    this.user.userId=id;
    this.userservice.activateUser(this.user.userId).subscribe(
    data => {
      this.userservice.deactiveList().subscribe( data =>{
        this.users =data
        console.log(this.users)
      } )
    },
    error => console.log(error));
  }

  get UserId() {
    return this.activeUserForm.get('userId');
  }

}