import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
  details: any[] = [];
  errorMessage: string = '';

  constructor(private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails(): void {
    this.detailsService.getAllDetails().subscribe(
      (data) => {
        this.details = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching details!';
      }
    );
  }

  deleteDetail(detailId: number): void {
    this.detailsService.deleteDetail(detailId).subscribe(
      () => {
        this.details = this.details.filter((d) => d.id !== detailId);
      },
      (error) => {
        this.errorMessage = 'Error deleting detail!';
      }
    );
  }
}
