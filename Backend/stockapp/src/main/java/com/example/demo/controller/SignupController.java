package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Signup;
import com.example.demo.service.SignupService;

@RestController

@CrossOrigin(origins="http://localhost:3000/")

public class SignupController {
	
	@Autowired
	public SignupService service;
	 @PostMapping("/sign")
	 public Signup  postDetails(@RequestBody Signup sign) {
		 return service.addDetails(sign);
	 }

}
