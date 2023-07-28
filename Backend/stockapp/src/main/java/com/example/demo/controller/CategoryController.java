package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Category;
import com.example.demo.service.CategoryService;



@RestController
@CrossOrigin(origins="http://localhost:3000/")
public class CategoryController {
	@Autowired
	private CategoryService ser;

	@PostMapping("/category")
    public List<Category> postDetails(@RequestBody List<Category> category) {
        return ser.addDetails(category);
    }

}
