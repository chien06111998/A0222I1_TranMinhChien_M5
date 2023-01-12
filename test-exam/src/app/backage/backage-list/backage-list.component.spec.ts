import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackageListComponent } from './backage-list.component';

describe('BackageListComponent', () => {
  let component: BackageListComponent;
  let fixture: ComponentFixture<BackageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
