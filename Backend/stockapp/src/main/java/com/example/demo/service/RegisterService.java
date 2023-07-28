package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Register;
import com.example.demo.repository.RegisterRepository;

@Service

public class RegisterService {
	@Autowired
	
	public RegisterRepository repo;
	public Register addDetails(Register reg) {
		return repo.save(reg);
	}
	

}
