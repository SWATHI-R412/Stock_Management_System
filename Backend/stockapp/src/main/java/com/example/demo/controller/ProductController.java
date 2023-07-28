package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;



@RestController
@CrossOrigin(origins="http://localhost:3000/")
public class ProductController {
	@Autowired
	private ProductService ser;

	@PostMapping("/product")
    public List<Product> postDetails(@RequestBody List<Product> product) {
        return ser.addDetails(product);
    }

}
