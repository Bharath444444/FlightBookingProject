// book-flight.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root',
})
export class BookFlightService {
  
  private baseUrl = 'http://localhost:8086/api/bookings';
  
  // Injecting HttpClient to make HTTP requests
  constructor(private httpClient: HttpClient) {}

  bookFlight(bookingData: Booking): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/book`, bookingData);
  }
  

  getAllBookings(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(`${this.baseUrl}/all`);
  }

  deleteBooking(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
