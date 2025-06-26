import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details } from '../models/details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private baseurl = 'http://localhost:8086/api/details';
  constructor(private http:HttpClient) { }
  getAllDetails(): Observable<Details[]> {
    return this.http.get<Details[]>(`${this.baseurl}/all`);
  }
  addDetails(details: Details): Observable<Details> {
    return this.http.post<Details>(`${this.baseurl}/add`, details);
  }
  
  deleteDetail(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseurl}/delete/${id}`);
  }
}
