package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.details;
import com.example.demo.repository.detailsrepository;

@Service
public class detailsservice {
	 @Autowired
	    private detailsrepository detailsRepository;
	    public details addBookingDetail(details detail) {
		    return detailsRepository.save(detail);
		}

	    // Get all booking details
	    public List<details> getAllBookingDetails() {
	        return detailsRepository.findAll();
	    }

	    // Delete a booking by ID
	    public void deleteBooking(Long id) {
	        detailsRepository.deleteById(id);
	    }
}
