package com.coll.OnlineCollaborate.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.coll.OnlineCollaborate.dao.IBlogCommentsDao;
import com.coll.OnlineCollaborate.dao.IBlogDao;
import com.coll.OnlineCollaborate.model.Blog;
import com.coll.OnlineCollaborate.model.BlogComments;
import com.coll.OnlineCollaborate.service.IBlogCommentsService;

@Service
@Transactional
public class BlogCommentsServiceImpl implements IBlogCommentsService{

	@Autowired
	IBlogCommentsDao blogCommentsDao;
	
	@Override
	public List<BlogComments> getAllComments() {
		return blogCommentsDao.getAllComments();
	}

	@Override
	public BlogComments getBlogCommentsById(int blogCommentsId) {
		return blogCommentsDao.getBlogCommentsById(blogCommentsId);
	}

	@Override
	public boolean addBlogComments(BlogComments blogComments) {
		return blogCommentsDao.addBlogComments(blogComments);
	}

	@Override
	public boolean updateBlogComments(BlogComments blogComments) {
		return blogCommentsDao.updateBlogComments(blogComments);
	}

	@Override
	public boolean deleteBlogComments(BlogComments blogComments) {
		return blogCommentsDao.deleteBlogComments(blogComments);
	}

	@Override
	public List<BlogComments> getCommentsbyBlog(int blogId) {
		// TODO Auto-generated method stub
		return null;
	}

}
