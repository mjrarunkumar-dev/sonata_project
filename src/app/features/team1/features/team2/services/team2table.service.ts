import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Team2Project {
  id: string;
  projectName: string;
  owner: string;
  status: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class Team2TableService {

  private baseUrl =
    'https://699703907d17864365760cf3.mockapi.io/dashboard/card_details';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Team2Project[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map(data =>
        data.map(item => ({
          id: item.id,
          projectName: item.projectName ?? 'N/A',
          owner: item.owner ?? 'Unknown',
          status: item.status ?? 'Pending',
          createdAt: item.createdAt
        }))
      )
    );
  }
}
