package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Signup;
import com.example.demo.repository.SignupRepository;

@Service

public class SignupService {
	@Autowired
	
	public SignupRepository repo;
	public Signup addDetails(Signup sign) {
		return repo.save(sign);
	}
	

}
