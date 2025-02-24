import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookFlightService } from '../services/bookflight.service';
import { DetailsService } from '../services/details.service';
import { Booking } from '../models/booking';
import { Details } from '../models/details';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.bookingForm = this.formBuilder.group({
      passengerName: ['', Validators.required],
      noOfTickets: [1, [Validators.required, Validators.min(1)]],
      flightId: ['', Validators.required],
    });
  }

  book(): void {
    if (this.bookingForm.invalid) {
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }

    const { passengerName, noOfTickets, flightId } = this.bookingForm.value;
    const totalFare = noOfTickets * 1000; // ✅ Assuming ₹1000 per ticket

    const booking: Booking = { passengerName, noOfTickets, flightId };

    // ✅ Step 1: Book the flight
    this.bookFlightService.bookFlight(booking).subscribe(
      (response) => {
        const bookingId = response.id; // ✅ Retrieve ID from backend

        // ✅ Step 2: Store booking in DetailsService
        const details: Details = {
          passengerName,
          noOfTickets,
          flightId,
          amount: totalFare,
        };

        this.detailsService.addDetails(details).subscribe(
          () => {
            this.successMessage = `Flight booked successfully! Booking ID: ${bookingId}`;

            // ✅ Redirect to View Details after booking
            setTimeout(() => this.router.navigate(['/detailspage']), 2000);
          },
          () => {
            this.errorMessage = 'Error adding details!';
          }
        );
      },
      () => {
        this.errorMessage = 'Error booking the flight!';
      }
    );
  }

  get control() {
    return this.bookingForm.controls;
  }
}
