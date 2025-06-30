package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.booking;
import com.example.demo.models.Flight;
import com.example.demo.repository.bookingrepository;
import com.example.demo.repository.FlightRepository;

@Service
public class bookingservice {

    @Autowired
    private bookingrepository bookingRepository;

    @Autowired
    private FlightRepository flightRepository;

    // ✅ Save a new booking with seatLimit and seat number logic
    public booking bookFlight(booking booking) {
        // Step 1: Find the flight
        Flight flight = flightRepository.findByFlightId(booking.getFlightId())
                .orElseThrow(() -> new RuntimeException("Invalid Flight ID."));

        int available = flight.getSeatlimit();
        int requested = booking.getNoOfTickets();

        // Step 2: Check if requested tickets are within seatLimit
        if (requested > available) {
            throw new RuntimeException("Not enough seats available.");
        }

        // ✅ Step 3: Assign seat numbers
        List<String> seatList = new ArrayList<>();
        for (int i = available - requested + 1; i <= available; i++) {
            seatList.add("Seat-" + i);
        }
        String seatnumber = String.join(", ", seatList);
        booking.setSeatnumber(seatnumber); // plain format ✅

        // Step 4: Save the booking
        booking savedBooking = bookingRepository.save(booking);

        // Step 5: Update seatLimit in flight
        flight.setSeatLimit(available - requested);
        flightRepository.save(flight);

        return savedBooking;
    }

    // 🔁 Get all bookings
    public List<booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}
