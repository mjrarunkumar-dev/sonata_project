import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team2Sidebar } from './team2-sidebar';

describe('Team2Sidebar', () => {
  let component: Team2Sidebar;
  let fixture: ComponentFixture<Team2Sidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Team2Sidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team2Sidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
