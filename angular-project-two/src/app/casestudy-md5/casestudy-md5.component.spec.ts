import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyMd5Component } from './casestudy-md5.component';

describe('CasestudyMd5Component', () => {
  let component: CasestudyMd5Component;
  let fixture: ComponentFixture<CasestudyMd5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasestudyMd5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudyMd5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
