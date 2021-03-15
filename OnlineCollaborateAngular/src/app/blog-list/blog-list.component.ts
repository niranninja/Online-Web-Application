import { Component, OnInit } from '@angular/core';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';
import {DataTablesModule} from 'angular-datatables';
import { error } from 'protractor';
import { FormControl, FormGroup} from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(private blogservice:BlogService) { }

  userArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  blogs: Observable <Blog[]>;
  blog: Blog = new Blog();
  deleteMessage = false;
  bloglist: any;
  isupdated = false;


  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.blogservice.getallblogs().subscribe((data) => {
      this.blogs = data;
      this.dtTrigger.next();
    })
  }
  bloglistform=new FormGroup({
    blogId:new FormControl(),
    blogTitle:new FormControl(),
    blogcontent:new FormControl(),
    status:new FormControl(),
    noOfLikes:new FormControl(),
    noOfComments:new FormControl(),
    userId:new FormControl(),
    userName:new FormControl()
  });
  get blogId(){
    return this.bloglistform.get('blogId');
  }
  get blogTitle(){
    return this.bloglistform.get('blogTitle');
  }
  get blogcontent(){
    return this.bloglistform.get('content');
  }
  get status(){
    return this.bloglistform.get('status');
  }
  get noOfLikes(){
    return this.bloglistform.get('noOfLikes');
  }
  get noOfComments(){
    return this.bloglistform.get('noOfComments');
  }
  get noOfViews(){
    return this.bloglistform.get('noOfViews');
  }
  get userId(){
    return this.bloglistform.get('userId');
  }
  get userName(){
    return this.bloglistform.get('userName');
  }
}

