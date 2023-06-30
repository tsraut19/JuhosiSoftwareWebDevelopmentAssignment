package com.sample.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.model.UserData;
import com.sample.service.UserDataService;

@RestController
@RequestMapping(value= {"/data"})
@CrossOrigin(origins ="*")
public class UserDataController {
	
	@Autowired
	UserDataService userDataService;
	
	@PostMapping(value= {"/add"})
	public String addItem(@RequestBody UserData userData)
	{
		userDataService.addData(userData);
		return "item added";
		
	}
	
	

}
