package com.coll.OnlineCollaborate.daoImpl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.coll.OnlineCollaborate.dao.IUserDao;
import com.coll.OnlineCollaborate.model.User;

@Repository("userDao")
@Transactional
public class UserDaoImpl implements IUserDao{

	@Autowired
	SessionFactory sessionFactory;
	@Override
	public List<User> userListbyStatus(String status) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> getAllUsers() {
		
		return sessionFactory.getCurrentSession().createQuery("from User", User.class).getResultList();
	}

	@Override
	public User getUserById(int userId) {
		
		return sessionFactory.getCurrentSession().get(User.class, Integer.valueOf(userId));
	}

	@Override
	public User getUserByUsername(String username) {
		String query="from User where username=:username";
		return sessionFactory.getCurrentSession().createQuery(query, User.class).setParameter("username", username).getSingleResult();
	}

	@Override
	public User validateUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean addUser(User user) {
		try {
			sessionFactory.getCurrentSession().save(user);
			return true;
		}
		catch(Exception ex){
			ex.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean updateUser(User user) {
		try {
			sessionFactory.getCurrentSession().update(user);
			return true;
		}
		catch(Exception ex){
			ex.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteUser(int userId) {
		try {
			sessionFactory.getCurrentSession().delete(getUserById(userId));
			return true;
		}
		catch(Exception ex){
			ex.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deactivateUser(int userId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean updateUserProfile(String file, Integer userId) {
		// TODO Auto-generated method stub
		return false;
	}

}
