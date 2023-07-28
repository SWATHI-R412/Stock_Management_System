package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Brand;
import com.example.demo.service.BrandService;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
public class BrandController {
	@Autowired
	private BrandService ser;

	@PostMapping("/brand")
    public List<Brand> postDetails(@RequestBody List<Brand> brand) {
        return ser.addDetails(brand);
    }
	
	@PutMapping("/put/{sno}")
	public String putDetails(@RequestBody Brand brand) {
		return ser.updateDetails(brand);
	}
	
	@DeleteMapping("/del/{sno}")
	public void deletedetails(@PathVariable("sno") int sno) {
		ser.deleteDetails(sno);
	}

}
