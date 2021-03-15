import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http:HttpClient) { }

  getallblogs(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'blog-list');  

  }
  CreateBlog(blog: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'save-blog', blog);  
  }  
  
  deleteBlog(blogId: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/delete-blog/${blogId}`, { responseType: 'text' });  
  }  
   
  getBlogsbyId(blogId: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/blog/${blogId}`);  
  }  
  
  updateBlog(blogId: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/update-blog/${blogId}`, value);  
  }  

}