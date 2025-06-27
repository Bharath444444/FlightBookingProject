package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.models.Flight;
import com.example.demo.service.FlightService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/api/flights")
@CrossOrigin(origins = "*")
public class FlightController{
	@Autowired
    private FlightService flightService;

    @GetMapping
    public List<Flight> getAllFlights() {
        return flightService.getAllFlights();
    }

    @GetMapping("/{flightId}")
    public ResponseEntity<Flight> getFlightById(@PathVariable String flightId) {
        Optional<Flight> flight = flightService.getFlightByFlightId(flightId);
        return flight.map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }
}
