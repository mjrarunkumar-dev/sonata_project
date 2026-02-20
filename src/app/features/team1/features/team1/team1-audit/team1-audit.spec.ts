import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team2Audit } from './team1-audit';

describe('Team2Audit', () => {
  let component: Team2Audit;
  let fixture: ComponentFixture<Team2Audit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Team2Audit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team2Audit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
