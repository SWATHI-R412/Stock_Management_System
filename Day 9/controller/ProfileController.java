package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ProfilePage;
import com.example.demo.service.ProfileService;

@RestController

@CrossOrigin(origins="http://localhost:3000/")
public class ProfileController {
	

	
		
		@Autowired
		public ProfileService service;
		 @PostMapping("/prof")
		 public ProfilePage postDetails(@RequestBody ProfilePage prof) {
			 return service.addDetails(prof);
		 }

}
