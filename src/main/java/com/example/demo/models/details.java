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
	    @Column(name = "seatnumber")
	    private String seatnumber;
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
		public void setAmount(double amount) {
			this.amount = amount;
		}
		public String getFlightId() {
			return flightId;
		}
		public void setFlightId(String flightId) {
			this.flightId = flightId;
		}
		public String getSeatnumber() {
			return seatnumber;
		}
		public void setSeatnumber(String seatnumber) {
			this.seatnumber = seatnumber;
		}
		public details(Long id, String passengerName, int noOfTickets, double amount, String flightId,
				String seatnumber) {
			super();
			this.id = id;
			this.passengerName = passengerName;
			this.noOfTickets = noOfTickets;
			this.amount = amount;
			this.flightId = flightId;
			this.seatnumber = seatnumber;
		}
		public details() {
			super();
			// TODO Auto-generated constructor stub
		}

		
	    
}
