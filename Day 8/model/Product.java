package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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

public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int sno;
	private String productname;
	private double rate;
	private int quantity;
	private String brand;
	private String category;
	private String status;
	

}
