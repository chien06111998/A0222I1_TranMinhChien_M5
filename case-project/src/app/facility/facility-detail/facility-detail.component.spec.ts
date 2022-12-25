import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDetailComponent } from './facility-detail.component';

describe('FacilityDetailComponent', () => {
  let component: FacilityDetailComponent;
  let fixture: ComponentFixture<FacilityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
