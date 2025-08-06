package com.example.demo.models;
import jakarta.persistence.*;
import java.time.LocalDate;


@Entity
@Table(name = "flights")
public class Flight {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "flight_Id", unique = true)
    private String flightId;

    private String source;
    private String destination;
    private String time;
    private double price;
    @Column(name = "seatlimit")
    private Integer seatlimit;
    @Column(name = "journey_date")
    private LocalDate journeyDate;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFlightId() {
		return flightId;
	}
	public void setFlightId(String flightId) {
		this.flightId = flightId;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public Integer getSeatlimit() {
		return seatlimit;
	}
	public void setSeatlimit(Integer seatlimit) {
		this.seatlimit = seatlimit;
	}
	public LocalDate getJourneyDate() {
		return journeyDate;
	}
	public void setJourneyDate(LocalDate journeyDate) {
		this.journeyDate = journeyDate;
	}
	public Flight(int id, String flightId, String source, String destination, String time, double price,
			Integer seatlimit, LocalDate journeyDate) {
		super();
		this.id = id;
		this.flightId = flightId;
		this.source = source;
		this.destination = destination;
		this.time = time;
		this.price = price;
		this.seatlimit = seatlimit;
		this.journeyDate = journeyDate;
	}
	public Flight() {
		super();
		// TODO Auto-generated constructor stub
	}

	
    
}
