import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Team1Transaction {
  id: string;
  type: string;
  amount: number;
  status: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class Team1TransactionService {

  private baseUrl =
    'https://699703907d17864365760cf3.mockapi.io/tran';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Team1Transaction[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map(data =>
        data.map(item => ({
          id: item.id,
          type: item.type ?? 'UNKNOWN',
          amount: Number(item.Amount ?? item.amount ?? 0),
          status: item.status ?? 'pending',
          timestamp: item.createdAt
        }))
      )
    );
  }
}