import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDarkLightModeComponent } from './button-dark-light-mode.component';

describe('ButtonDarkLightModeComponent', () => {
  let component: ButtonDarkLightModeComponent;
  let fixture: ComponentFixture<ButtonDarkLightModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDarkLightModeComponent]
    });
    fixture = TestBed.createComponent(ButtonDarkLightModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
