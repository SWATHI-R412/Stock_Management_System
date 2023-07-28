package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class ProfilePage {
	
	@Id
	
	private String firstname;
	private String lastname;
	private String username;
	private String oldPassword;
	private String newPassword;
	private String mail;
	private String contact;

}
