package com.example.demo.models;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "details")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class details {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String passengerName;
	    private int noOfTickets;
	    private double amount;
	    private String flightId;
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
		public double getAmount() {
			return amount;
		}
		public String getFlightId() {
			return flightId;
		}
		public void setFlightId(String flightId) {
			this.flightId = flightId;
		}
		public details() {
			super();
			// TODO Auto-generated constructor stub
		}
		public details(Long id, String passengerName, int noOfTickets, double amount, String flightId) {
			super();
			this.id = id;
			this.passengerName = passengerName;
			this.noOfTickets = noOfTickets;
			this.flightId = flightId;
		}
	    
}
