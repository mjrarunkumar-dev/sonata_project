import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team1Table } from './team1-table';

describe('Team1Table', () => {
  let component: Team1Table;
  let fixture: ComponentFixture<Team1Table>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Team1Table]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team1Table);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
