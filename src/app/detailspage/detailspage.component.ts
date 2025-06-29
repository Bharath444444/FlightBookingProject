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
      },
      (error) => {
        this.errorMessage = 'Error deleting detail!';
      }
    );
  }
  printTicket(detail: any): void {
  const printWindow = window.open('', '_blank');
  printWindow?.document.write(`
    <html>
      <head>
        <title>Ticket - ${detail.passengerName}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2 { color: #00A8E8; }
          p { margin: 8px 0; }
        </style>
      </head>
      <body>
        <h2>Flight Ticket</h2>
        <p><strong>Passenger:</strong> ${detail.passengerName}</p>
        <p><strong>Booking ID:</strong> ${detail.id}</p>
        <p><strong>Flight ID:</strong> ${detail.flightId}</p>
        <p><strong>Tickets:</strong> ${detail.noOfTickets}</p>
        <p><strong>Total Amount:</strong> ₹${detail.amount}</p>
        <p><strong>Seat Number(s):</strong> ${detail.seatnumber}</p>
        <br />
        <p>Thank you for booking with us!</p>
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
    </html>
  `);
}

}
