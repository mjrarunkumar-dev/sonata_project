import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team2Header } from './team2-header';

describe('Team2Header', () => {
  let component: Team2Header;
  let fixture: ComponentFixture<Team2Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Team2Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team2Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
