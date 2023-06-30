package com.sample.service;

import org.springframework.stereotype.Service;

import com.sample.model.UserData;

@Service
public interface UserDataService {

	void addData(UserData userData);

}
