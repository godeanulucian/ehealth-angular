import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHelpComponent } from './button-help.component';

describe('ButtonHelpComponent', () => {
  let component: ButtonHelpComponent;
  let fixture: ComponentFixture<ButtonHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonHelpComponent]
    });
    fixture = TestBed.createComponent(ButtonHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
