package com.example.demo.models;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;
@Entity
@Table(name = "bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class booking {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Passenger name cannot be empty")
    private String passengerName;

    @Min(value = 1, message = "At least 1 ticket must be booked")
    private int noOfTickets;

    @NotNull(message = "Flight ID is required")
    private String flightId;

    private Double amount;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public int getNoOfTickets() {
		return noOfTickets;
	}

	public void setNoOfTickets(int noOfTickets) {
		this.noOfTickets = noOfTickets;
	}

	public String getFlightId() {
		return flightId;
	}

	public void setFlightId(String flightId) {
		this.flightId = flightId;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public booking(Long id, @NotNull(message = "Passenger name cannot be empty") String passengerName,
			@Min(value = 1, message = "At least 1 ticket must be booked") int noOfTickets,
			@NotNull(message = "Flight ID is required") String flightId, Double amount) {
		super();
		this.id = id;
		this.passengerName = passengerName;
		this.noOfTickets = noOfTickets;
		this.flightId = flightId;
		this.amount = amount;
	} 
    
}
