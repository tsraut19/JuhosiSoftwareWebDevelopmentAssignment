package com.sample.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.model.User;
import com.sample.service.UserService;

@RestController
@RequestMapping(value= {"/user"})
@CrossOrigin(origins ="*")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping(value = {"/login"})
	public User userLogin(@RequestBody User user) {
		return userService.login(user);
	}  
	
}
