package com.coll.OnlineCollaborate.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Component
@Entity

public class BlogComments implements Serializable {

	private static final long serialVersionUID = 1L;
	
	int blogCommentId;
	int userId;
	String username;
	String userProfileId;
	String title;
	int noOfLikes;
	String blogComment;
	LocalDate currentDate;
	
	@ManyToOne
	@JoinColumn(name="BlogId")
	@JsonBackReference
	Blog blog;
	
}
