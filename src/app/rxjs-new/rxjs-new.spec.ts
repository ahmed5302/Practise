import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsNew } from './rxjs-new';

describe('RxjsNew', () => {
  let component: RxjsNew;
  let fixture: ComponentFixture<RxjsNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
