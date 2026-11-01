import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js } from './js';

describe('Js', () => {
  let component: Js;
  let fixture: ComponentFixture<Js>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Js]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Js);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
