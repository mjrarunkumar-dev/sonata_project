import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team1Sidebar } from './team1-sidebar';

describe('Team1Sidebar', () => {
  let component: Team1Sidebar;
  let fixture: ComponentFixture<Team1Sidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Team1Sidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team1Sidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
