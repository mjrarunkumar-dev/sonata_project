import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team2Table } from './team2-table';

describe('Team2Table', () => {
  let component: Team2Table;
  let fixture: ComponentFixture<Team2Table>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Team2Table]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team2Table);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
