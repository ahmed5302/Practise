import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushParent } from './onpush-parent';

describe('OnpushParent', () => {
  let component: OnpushParent;
  let fixture: ComponentFixture<OnpushParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnpushParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpushParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
