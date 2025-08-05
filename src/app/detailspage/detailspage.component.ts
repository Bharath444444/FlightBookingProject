import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
  detailsWithFlight: any[] = [];
  errorMessage: string = '';

  constructor(private detailsService: DetailsService,private flightService:FlightService) {}

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails(): void {
    this.detailsService.getAllDetails().subscribe(
      (data) => {
        const enrichedDetails:{detail:any,flight:any}[]= [];

        data.forEach((detail: any) => {
          this.flightService.getFlightById(detail.flightId).subscribe(
            (flight) => {
              enrichedDetails.push({ detail, flight });

              // Update the list once all are added
              if (enrichedDetails.length === data.length) {
                this.detailsWithFlight = enrichedDetails;
              }
            },
            () => {
              enrichedDetails.push({ detail, flight: null }); // in case flight fetch fails
              if (enrichedDetails.length === data.length) {
                this.detailsWithFlight = enrichedDetails;
              }
            }
          );
        });
      },
      (error) => {
        this.errorMessage = 'Error fetching details!';
      }
    );
  }

 deleteDetail(detailId: number): void {
  this.detailsService.deleteDetail(detailId).subscribe(
    () => {
      this.detailsWithFlight = this.detailsWithFlight.filter((d) => d.detail.id !== detailId);
      // ✅ We don't touch availableFlights here
      // Seats are already updated in backend, so when user visits available flights, they will see correct data
    },
    (error) => {
      this.errorMessage = 'Error deleting detail!';
    }
  );
}


 printTicket(detail: any): void {
  this.flightService.getFlightById(detail.flightId).subscribe(flight => {
    const journeyDate = flight.journeyDate;
    const journeyTime = flight.time;

    const printWindow = window.open('', '_blank');
    printWindow?.document.write(`
      <html>
        <head>
          <title>Ticket - ${detail.passengerName}</title>
          <style>
            body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
            .ticket {
              max-width: 400px;
              margin: auto;
              background: white;
              border-radius: 10px;
              padding: 20px;
              border: 2px solid #00A8E8;
              box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
            .ticket-header {
              text-align: center;
              border-bottom: 2px dashed #00A8E8;
              padding-bottom: 10px;
              margin-bottom: 15px;
            }
            .ticket-header h2 {
              color: #00A8E8;
              margin: 0;
            }
            .ticket-header small {
              font-size: 12px;
              color: #666;
            }
            .ticket-details p {
              margin: 6px 0;
              font-size: 14px;
            }
            .ticket-footer {
              text-align: center;
              border-top: 2px dashed #00A8E8;
              margin-top: 15px;
              padding-top: 10px;
              font-size: 13px;
              color: #333;
            }
          </style>
        </head>
        <body>
          <div class="ticket">
            <div class="ticket-header">
              <h2>✈ Infy Airlines</h2>
              <small>Boarding Pass</small>
            </div>
            <div class="ticket-details">
              <p><strong>Passenger:</strong> ${detail.passengerName}</p>
              <p><strong>Booking ID:</strong> ${detail.id}</p>
              <p><strong>Flight ID:</strong> ${detail.flightId}</p>
              <p><strong>Journey Date:</strong> ${journeyDate}</p>
              <p><strong>Journey Time:</strong> ${journeyTime}</p>
              <p><strong>No. of Tickets:</strong> ${detail.noOfTickets}</p>
              <p><strong>Total Amount:</strong> ₹${detail.amount}</p>
              <p><strong>Seat Number(s):</strong> ${detail.seatnumber}</p>
            </div>
            <div class="ticket-footer">
              Thank you for booking with Infy Airlines!<br/>
              Have a pleasant journey ✈
            </div>
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
  });
}


}
