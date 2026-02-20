import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team2Dashboard } from './team2-dashboard';

describe('Team2Dashboard', () => {
  let component: Team2Dashboard;
  let fixture: ComponentFixture<Team2Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Team2Dashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team2Dashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
