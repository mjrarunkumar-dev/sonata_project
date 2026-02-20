import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rr } from './rr';

describe('Rr', () => {
  let component: Rr;
  let fixture: ComponentFixture<Rr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
