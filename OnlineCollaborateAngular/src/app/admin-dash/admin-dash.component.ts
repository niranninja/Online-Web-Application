import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import{User} from '../user';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 2 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 2 },
      ]
    })
  );
    user: any;
    id:number;
  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(){
    this.route.params.subscribe (
     (params:Params)=> {
       this.id=+params["id"];
       console.log(this.id);
 
       this.userService.getUser(this.id).subscribe (
         data=>{
           this.user=data;
           console.log(this.user);
         }
    )
     }
     
 
    )
 }
}