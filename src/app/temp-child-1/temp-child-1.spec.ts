import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempChild1 } from './temp-child-1';

describe('TempChild1', () => {
  let component: TempChild1;
  let fixture: ComponentFixture<TempChild1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempChild1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempChild1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
