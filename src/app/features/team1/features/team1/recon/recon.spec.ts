import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recon } from './recon';

describe('Recon', () => {
  let component: Recon;
  let fixture: ComponentFixture<Recon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
