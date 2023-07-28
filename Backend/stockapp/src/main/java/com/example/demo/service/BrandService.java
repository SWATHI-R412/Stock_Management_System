package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Brand;
import com.example.demo.repository.BrandRepository;

@Service
public class BrandService {
	@Autowired 
	private BrandRepository rep;

	public List<Brand> addDetails(List<Brand> brand) {
        return rep.saveAll(brand);
    }
	
	public String updateDetails(Brand brand) {
		rep.save(brand);
		return "Updated";
	}
	
	public void deleteDetails(int sno) {
		rep.deleteById(sno);
	}

}
