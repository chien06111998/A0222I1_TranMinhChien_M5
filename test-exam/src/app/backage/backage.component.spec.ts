import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackageComponent } from './backage.component';

describe('BackageComponent', () => {
  let component: BackageComponent;
  let fixture: ComponentFixture<BackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
