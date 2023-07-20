package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Signup;

public interface SignupRepository extends JpaRepository<Signup, String> {

}
