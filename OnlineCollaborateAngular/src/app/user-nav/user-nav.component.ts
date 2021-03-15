import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent {
  user:any;
  id:number;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver, private userService: UserService, private route: Router, private router: ActivatedRoute) {}

    ngOnInit() {
      this.router.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            
          }
        );
    }
    logout(){
      
      this.route.navigateByUrl("/home");
      this.userService.logoutUser(this.id).subscribe(
        (     data: any)=>console.log(data)
      );
   }

}
