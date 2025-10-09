package com.ecobazzar.ecobazzar.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecobazzar.ecobazzar.model.User;
import com.ecobazzar.ecobazzar.service.UserService;
	@RestController
	
	@RequestMapping("/users") 
	// first commit
	public class UserController {
	private final UserService userService;
	public UserController(UserService userService) {
	this.userService = userService;
	
	}
	
	@PostMapping
	public User createUser(@RequestBody User user) {
	return userService.createUser(user);
	}
	
	@GetMapping
	public List<User> getAllUsers() {
	return userService.getAllUsers();
	}

}
