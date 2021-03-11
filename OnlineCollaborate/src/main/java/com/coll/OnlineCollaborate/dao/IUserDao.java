package com.coll.OnlineCollaborate.dao;

import java.util.List;

import com.coll.OnlineCollaborate.model.User;

public interface IUserDao {

	List<User> userListbyStatus(String status);
	List<User> getAllUsers();
	List<User> getAllDeactiveUser();
	User getUserById(int userId);
	User getUserByUsername(String username);
	User validateUser(User user);
	boolean addUser(User user);
	boolean updateUser(User user);
	boolean deleteUser(int userId);
	boolean deactivateUser(int userId);
	boolean activateuser(int userId);
	boolean updateUserProfile(String file, Integer userId);
}
