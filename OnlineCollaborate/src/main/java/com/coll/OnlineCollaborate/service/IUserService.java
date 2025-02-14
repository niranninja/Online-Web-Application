package com.coll.OnlineCollaborate.service;

import java.util.List;

import com.coll.OnlineCollaborate.model.User;

public interface IUserService {

	List<User> userListbyStatus(String status);
	List<User> getAllUsers();
	User getUserById(int userId);
	User getUserByUsername(String username);
	User validateUser(User user);
	boolean addUser(User user);
	boolean updateUser(User user);
	boolean deleteUser(int userId);
	boolean deactivateUser(int userId);
	boolean logoutUser(int userId);
	boolean updateUserProfile(String file, Integer userId);
	List<User> getAllDeactiveUser();
	boolean activateUser(int userId);
}
