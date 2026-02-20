import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team1Header } from './team1-header';

describe('Team1Header', () => {
  let component: Team1Header;
  let fixture: ComponentFixture<Team1Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Team1Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team1Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
