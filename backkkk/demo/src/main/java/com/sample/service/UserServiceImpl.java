package com.sample.service;

import java.util.ArrayList;
import java.util.List;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.dao.UserDao;
import com.sample.model.User;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;
	
	@Override
	public User login(User user) {
		List<User> lst = new ArrayList<User>();
		lst = userDao.findAllActiveUsersNative(user.getName(),user.getPassword());
		User userq = userDao.findbyUserName(user.getName());
			if(userq.getPassword().equals(user.getPassword()))
			{
				return userq;
			}
			if (lst.isEmpty() || lst==null) {
				return null;
			}
			else {
				return null;
			}
	}

}
