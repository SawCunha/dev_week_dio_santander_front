import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) {}

  readonly baseUrl = 'http://localhost:8080/bootcamp';

  async getStockAll(): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

  async getStockToday(): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseUrl}/stock/today`).toPromise();
  }


}
