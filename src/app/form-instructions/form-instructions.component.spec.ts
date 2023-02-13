import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInstructionsComponent } from './form-instructions.component';

describe('FormInstructionsComponent', () => {
  let component: FormInstructionsComponent;
  let fixture: ComponentFixture<FormInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
