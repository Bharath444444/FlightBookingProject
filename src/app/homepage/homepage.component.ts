import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  showGuidelines: boolean = true;  // Initially, show guidelines

  hideGuidelines() {
    this.showGuidelines = false;  // Hide guidelines and show BookFlightComponent
  }
}
