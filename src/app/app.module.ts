import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { DetailspageComponent } from './detailspage/detailspage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BookflightComponent,
    BookingpageComponent,
    DetailspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
