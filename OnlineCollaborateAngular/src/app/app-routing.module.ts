import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ActivateUsersComponent } from './activate-users/activate-users.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },   
   {path:'about', component:AboutUsComponent},
  { path: 'add-user', component: RegisterUserComponent },
  {path: 'login-user', component: LoginUserComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component:UserComponent},
  
  
  {path: 'admin-nav/:id', component:AdminNavComponent,
children: [
  { path: 'user-List', component: UserListComponent }, 
  {path: 'activate-users', component:ActivateUsersComponent},
  {path: 'admindash', component:AdminDashComponent},

]
},
  {path: 'user-nav/:id', component:UserNavComponent,
  children:[
    {path:'blog', component:BlogComponent},
    {path :'userDash', component:UserDashComponent},
    {path: 'bloglist', component:BlogListComponent}
  ]
  
}
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
