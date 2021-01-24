package com.coll.OnlineCollaborate.dao;

import java.util.List;

import com.coll.OnlineCollaborate.model.Blog;
import com.coll.OnlineCollaborate.model.BlogComments;

public interface IBlogCommentsDao {
	
	List<BlogComments> getAllComments();
	
	BlogComments getBlogById(int blogId);
	boolean addBlog(BlogComments blog);
	boolean updateBlog(BlogComments blog);
	boolean deleteBlog(BlogComments blog);
	

}
