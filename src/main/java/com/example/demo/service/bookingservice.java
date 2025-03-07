package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.booking;
import com.example.demo.repository.bookingrepository;

@Service
public class bookingservice {
	@Autowired
    private bookingrepository bookingRepository;

    // Save a new booking
    public booking bookFlight(booking booking) {
        return bookingRepository.save(booking);
    }

    // Get all bookings
    public List<booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}
