import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team3Dashboard } from './team3-dashboard';

describe('Team3Dashboard', () => {
  let component: Team3Dashboard;
  let fixture: ComponentFixture<Team3Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Team3Dashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team3Dashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
