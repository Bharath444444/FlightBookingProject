package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.booking;

@Repository
public interface bookingrepository extends JpaRepository<booking, Long> {
	 booking findTopByPassengerNameOrderByIdDesc(String passengerName);
}
