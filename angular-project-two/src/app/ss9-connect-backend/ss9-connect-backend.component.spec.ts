import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss9ConnectBackendComponent } from './ss9-connect-backend.component';

describe('Ss9ConnectBackendComponent', () => {
  let component: Ss9ConnectBackendComponent;
  let fixture: ComponentFixture<Ss9ConnectBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss9ConnectBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss9ConnectBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
