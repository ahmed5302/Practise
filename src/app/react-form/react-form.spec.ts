import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactForm } from './react-form';

describe('ReactForm', () => {
  let component: ReactForm;
  let fixture: ComponentFixture<ReactForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
