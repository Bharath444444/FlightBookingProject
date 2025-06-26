import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { AvailableflightsComponent } from './availableflights/availableflights.component';
const routes: Routes = [
  {path:'',component:HomepageComponent},
 {path:'homepage', component:HomepageComponent} ,
 {path:'bookflight',component:BookflightComponent},
 {path:'bookingpage',component:BookingpageComponent},
 {path:'detailspage',component:DetailspageComponent},
 {path:'availableflights',component:AvailableflightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
