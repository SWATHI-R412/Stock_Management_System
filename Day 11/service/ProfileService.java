package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.ProfilePage;
import com.example.demo.repository.ProfileRepository;



@Service
public class ProfileService {
	
@Autowired
	
	public ProfileRepository repo;
	public ProfilePage addDetails(ProfilePage prof) {
		return repo.save(prof);
	}

}
