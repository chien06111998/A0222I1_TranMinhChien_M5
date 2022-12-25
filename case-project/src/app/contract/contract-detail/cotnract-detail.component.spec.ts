import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotnractDetailComponent } from './cotnract-detail.component';

describe('CotnractDetailComponent', () => {
  let component: CotnractDetailComponent;
  let fixture: ComponentFixture<CotnractDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotnractDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotnractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
