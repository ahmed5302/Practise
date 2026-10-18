import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDriven } from './temp-driven';

describe('TempDriven', () => {
  let component: TempDriven;
  let fixture: ComponentFixture<TempDriven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempDriven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempDriven);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
