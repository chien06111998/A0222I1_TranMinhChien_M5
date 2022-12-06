import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss4AngularComponentTemplateComponent } from './ss4-angular-component-template.component';

describe('Ss4AngularComponentTemplateComponent', () => {
  let component: Ss4AngularComponentTemplateComponent;
  let fixture: ComponentFixture<Ss4AngularComponentTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss4AngularComponentTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss4AngularComponentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
