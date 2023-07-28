package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Register;

import com.example.demo.service.RegisterService;


@RestController

@CrossOrigin(origins="http://localhost:3000/")

public class RegisterController {
	
	@Autowired
	public RegisterService service;
	 @PostMapping("/reg")
	 public Register postDetails(@RequestBody Register reg) {
		 return service.addDetails(reg);
	 }

}
