import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
private baseUrl = 'http://localhost:8086/api/flights';

  constructor(private http: HttpClient) { }
  getAllFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.baseUrl);
  }

  getFlightById(flightId: string): Observable<Flight> {
    return this.http.get<Flight>(`${this.baseUrl}/${flightId}`);
  }
}
