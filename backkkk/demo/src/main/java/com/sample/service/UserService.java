package com.sample.service;

import org.springframework.stereotype.Service;

import com.sample.model.User;

@Service
public interface UserService {
	User login(User user);
}
