package com.example.demo.service;
import com.example.demo.models.Flight;
import com.example.demo.repository.FlightRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class FlightService {
	@Autowired
    private FlightRepository flightRepo;

    public List<Flight> getAllFlights() {
        return flightRepo.findAll();
    }

    public Optional<Flight> getFlightByFlightId(String flightId) {
        return flightRepo.findByFlightId(flightId);
    }
}
