import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailspageComponent } from './detailspage.component';

describe('DetailspageComponent', () => {
  let component: DetailspageComponent;
  let fixture: ComponentFixture<DetailspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailspageComponent]
    });
    fixture = TestBed.createComponent(DetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
