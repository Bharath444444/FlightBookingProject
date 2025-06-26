import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableflightsComponent } from './availableflights.component';

describe('AvailableflightsComponent', () => {
  let component: AvailableflightsComponent;
  let fixture: ComponentFixture<AvailableflightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableflightsComponent]
    });
    fixture = TestBed.createComponent(AvailableflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
