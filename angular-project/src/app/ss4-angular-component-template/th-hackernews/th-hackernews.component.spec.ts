import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThHackernewsComponent } from './th-hackernews.component';

describe('ThHackernewsComponent', () => {
  let component: ThHackernewsComponent;
  let fixture: ComponentFixture<ThHackernewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThHackernewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThHackernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
