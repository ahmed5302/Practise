import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalParent } from './signal-parent';

describe('SignalParent', () => {
  let component: SignalParent;
  let fixture: ComponentFixture<SignalParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
