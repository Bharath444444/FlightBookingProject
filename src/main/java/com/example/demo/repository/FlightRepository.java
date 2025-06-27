package com.example.demo.repository;
import com.example.demo.models.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public interface FlightRepository extends JpaRepository<Flight, Integer>{
	Optional<Flight> findByFlightId(String flightId);
}
