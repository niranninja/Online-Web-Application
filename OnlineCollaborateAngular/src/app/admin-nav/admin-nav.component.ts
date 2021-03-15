import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent {

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
