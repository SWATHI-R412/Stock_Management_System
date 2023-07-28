package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Orders;
import com.example.demo.service.OrderService;



@RestController
@CrossOrigin(origins="http://localhost:3000/")
public class OrderController {
	@Autowired
	private OrderService ser;

	@PostMapping("/order")
    public List<Orders> postDetails(@RequestBody List<Orders> order) {
        return ser.addDetails(order);
    }
	
	@GetMapping("/get")
	public List<Orders> getDetails(){
		return ser.getAllDetails();
	}

}
