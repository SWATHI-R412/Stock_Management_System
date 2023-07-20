package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.ProfilePage;

public interface ProfileRepository extends JpaRepository<ProfilePage, String> {

}
