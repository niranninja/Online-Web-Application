import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Blog } from '../blog';
import {BlogService} from '../blog.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  Id: number;
  user: any;

  constructor(private blogservice: BlogService,private route: ActivatedRoute, private userservice: UserService) { }
  blog: Blog =new Blog();
  submitted = false;
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.Id = +params["Id"];
        console.log(this.Id);

        this.userservice.getUser(this.Id).subscribe(
          data => {
            this.user = data;
            console.log(this.user);
          }
        )
      }


    )
    this.submitted = false;
  }

  blogpostform= new FormGroup(
    {
      blogTitle: new FormControl(''),
      blogContent:new FormControl('')
     
    });
  
    blogpost(blogpost:any){
      this.blog =new Blog();
      this.blog.userId=this.user.userId;
      this.blog.userName=this.user.username; 
      this.blog.blogcontent=this.BlogContent.value;
      this.blog.blogTitle=this.BlogTitle.value;
    if(this.user.role=="Admin"){
      this.blog.status="Posted";
    }
    else{
      this.blog.status="Waiting For Apporved";
    }
    this.submitted=true;
      console.log(this.blog.blogcontent);
      this.save();
    }
    save(){
      this.blogservice.CreateBlog(this.blog)
      .subscribe(data=>console.log(data), error=> console.log(error));
      this.blog =new Blog();
    }

    get BlogContent(){
      return this.blogpostform.get('blogContent');
    }
    get BlogTitle(){
      return this.blogpostform.get('blogTitle');
    }

    blogPostForm(){
      this.submitted=false;
      this.blogpostform.reset();
    }
}
 