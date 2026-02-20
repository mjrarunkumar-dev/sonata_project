import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dsp } from './dsp';

describe('Dsp', () => {
  let component: Dsp;
  let fixture: ComponentFixture<Dsp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dsp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dsp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
