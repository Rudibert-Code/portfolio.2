import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePopup } from './language-popup';

describe('LanguagePopup', () => {
  let component: LanguagePopup;
  let fixture: ComponentFixture<LanguagePopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagePopup],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagePopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
