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

public class Orders {
	
	@Id
	private int sno;
	private String ordate;
	private String clientname;
	private int clientct;
	private String product;
	private double rate;
	private int quantity;
	private int total;

}
