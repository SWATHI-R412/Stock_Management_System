package com.example.demo.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Orders;
import com.example.demo.repository.OrderRepository;



@Service
public class OrderService {
	@Autowired 
	private OrderRepository rep;

	public List<Orders> addDetails(List<Orders> order) {
        return rep.saveAll(order);
    }
	
	public List<Orders> getAllDetails(){
		return rep.findAll();
	}

}
