import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team1Dashboard } from './team1-dashboard';

describe('Team1Dashboard', () => {
  let component: Team1Dashboard;
  let fixture: ComponentFixture<Team1Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Team1Dashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team1Dashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
