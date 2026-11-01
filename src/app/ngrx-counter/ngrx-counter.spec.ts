import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCounter } from './ngrx-counter';

describe('NgrxCounter', () => {
  let component: NgrxCounter;
  let fixture: ComponentFixture<NgrxCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
