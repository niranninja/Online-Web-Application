package com.coll.OnlineCollaborate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coll.OnlineCollaborate.model.Blog;
import com.coll.OnlineCollaborate.model.BlogComments;
import com.coll.OnlineCollaborate.service.IBlogCommentsService;
import com.coll.OnlineCollaborate.service.IBlogService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
public class BlogCommentsController {

	@Autowired
	IBlogCommentsService blogCommentsService;
	
	@PostMapping("save-blogComments")
	public boolean saveBlogComments(@RequestBody BlogComments blogComments) {
		return blogCommentsService.addBlogComments(blogComments);
	}
	
	@GetMapping("blogComments-list")
	public List<BlogComments> allBlogComments(){
		return blogCommentsService.getAllComments();
	}
	
	@DeleteMapping("delete-blogComments/{blogComments_id}")
	public boolean deleteBlogComments(@PathVariable("blogComments_id")BlogComments blogComments_id) {
		return blogCommentsService.deleteBlogComments(blogComments_id);
		
	}
	
	@GetMapping("blogComments/{blogComments_id")
	public BlogComments BlogCommentsById(@PathVariable("blogComments_id")int blogComments_id) {
		return blogCommentsService.getBlogCommentsById(blogComments_id);
	}
	
	@PostMapping("update-blogComments/{blogComments_id}")
	public boolean updateBlogComments(@RequestBody BlogComments blogComments,@PathVariable("blogComments_id")int blogComments_id) {
		blogComments.setBlogCommentId(blogComments_id);
		return blogCommentsService.updateBlogComments(blogComments);
	}
}
