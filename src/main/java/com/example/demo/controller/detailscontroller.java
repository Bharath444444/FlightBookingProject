package com.example.demo.controller;
import com.example.demo.repository.bookingrepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.booking;
import com.example.demo.models.details;
import com.example.demo.repository.bookingrepository;
import com.example.demo.service.FlightService;
import com.example.demo.service.detailsservice;

@RestController
@RequestMapping("/api/details")
@CrossOrigin(origins = "*")
public class detailscontroller {
	 @Autowired
	    private detailsservice detailsService;
     @Autowired
     private bookingrepository bookingRepository;
	    @GetMapping("/all")
	    public List<details> getAllBookings() {
	        return detailsService.getAllBookingDetails();
	    }

	    @Autowired
	    private FlightService flightService; // ✅ Inject the service

	    @DeleteMapping("/delete/{id}")
	    public void deleteBooking(@PathVariable Long id) {
	        details bookingDetail = detailsService.getBookingById(id); // You'll add this in detailsservice

	        if (bookingDetail != null) {
	            flightService.getFlightByFlightId(bookingDetail.getFlightId())
	                .ifPresent(flight -> {
	                    // ✅ Match setter name exactly as in Flight entity
	                    flight.setSeatlimit(flight.getSeatlimit() + bookingDetail.getNoOfTickets());
	                    flightService.saveFlight(flight);
	                });

	            detailsService.deleteBooking(id);
	        }
	    }


	    @PostMapping("/add")
	    public details addBookingDetail(@RequestBody details detail) {
	    	booking latestBooking = bookingRepository.findTopByPassengerNameOrderByIdDesc(detail.getPassengerName());

	        if (latestBooking != null) {
	            detail.setSeatnumber(latestBooking.getSeatnumber()); // ✅ Copy seat number to details
	        }

	        return detailsService.addBookingDetail(detail);
	    }

}
