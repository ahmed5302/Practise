import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempChild2 } from './temp-child-2';

describe('TempChild2', () => {
  let component: TempChild2;
  let fixture: ComponentFixture<TempChild2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempChild2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempChild2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
