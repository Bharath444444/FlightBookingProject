package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.booking;
import com.example.demo.service.bookingservice;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "*") 
public class bookingcontroller {
	@Autowired
    private bookingservice bookingService;

    @PostMapping("/book")
    public booking bookFlight(@RequestBody booking booking) {
        return bookingService.bookFlight(booking);
    }
}
