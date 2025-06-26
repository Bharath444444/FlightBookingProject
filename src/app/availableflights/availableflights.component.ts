import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-availableflights',
  templateUrl: './availableflights.component.html',
  styleUrls: ['./availableflights.component.css']
})
export class AvailableflightsComponent implements OnInit{
flights: Flight[] = [];

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.loadFlights();
}
loadFlights(): void {
    this.flightService.getAllFlights().subscribe({
      next: (data) => {
        this.flights = data;
      },
      error: (err) => {
        console.error('Failed to load flights', err);
      }
    });
  }

  bookFlight(flightId: string): void {
    // Navigate to booking form with query param
    this.router.navigate(['/bookingpage'], { queryParams: { flightId:flightId } });
  }
}
