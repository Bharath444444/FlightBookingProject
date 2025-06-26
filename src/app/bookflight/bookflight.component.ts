import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookFlightService } from '../services/bookflight.service';
import { DetailsService } from '../services/details.service';
import { FlightService } from '../services/flight.service';
import { Booking } from '../models/booking';
import { Details } from '../models/details';
import { Flight } from '../models/flight';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css'],
})
export class BookflightComponent implements OnInit {
  bookingForm!: FormGroup;
  availableFlights: any[] = [];
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private bookFlightService: BookFlightService,
    private detailsService: DetailsService,
    private flightservice: FlightService,
    private router: Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.route.queryParams.subscribe(params => {
    const flightIdFromQuery = params['flightId'];
    if (flightIdFromQuery) {
      this.bookingForm.patchValue({ flightId: flightIdFromQuery });
    }
  });
  }

  private initializeForm(): void {
    this.bookingForm = this.formBuilder.group({
      passengerName: ['', Validators.required],
      noOfTickets: [1, [Validators.required, Validators.min(1)]],
      flightId: ['', Validators.required],
    });
  }

 book(): void {
  this.errorMessage = '';
  this.successMessage = '';

  if (this.bookingForm.invalid) {
    this.errorMessage = 'Please fill in all fields correctly.';
    return;
  }

  const { passengerName, noOfTickets, flightId } = this.bookingForm.value;

  // ✅ Step 1: Check if flight exists using FlightService
  this.flightservice.getFlightById(flightId).subscribe(
    (flight) => {
      if (!flight) {
        this.errorMessage = 'Flight not found! Please enter a valid Flight ID (e.g., IND-105).';
        return;
      }

      const totalFare = noOfTickets * flight.price;

      const booking: Booking = {
        passengerName,
        noOfTickets,
        flightId,
        amount: totalFare
      };

      const detail: Details = {
        passengerName,
        noOfTickets,
        flightId,
        amount: totalFare
      };

      // ✅ Step 2: Book flight and store details
      this.bookFlightService.bookFlight(booking).subscribe(
        () => {
          this.detailsService.addDetails(detail).subscribe(
            () => {
              this.successMessage = 'Flight booked successfully!';
              setTimeout(() => this.router.navigate(['/detailspage']), 2000);
            },
            () => {
              this.errorMessage = 'Error storing booking details.';
            }
          );
        },
        () => {
          this.errorMessage = 'Error booking the flight.';
        }
      );
    },
    () => {
      this.errorMessage = 'Flight ID is invalid or server error occurred.';
    }
  );
}

  get control() {
    return this.bookingForm.controls;
  }
}
