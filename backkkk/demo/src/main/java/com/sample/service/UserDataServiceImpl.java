package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.dao.UserDataDao;
import com.sample.model.UserData;

@Service
public class UserDataServiceImpl implements UserDataService {

	@Autowired
	UserDataDao userDataDao;
	
	@Override
	public void addData(UserData userData) {
		userDataDao.save(userData);
	}

}
