import { DashboardService } from './../dashboard.service';
import Stock from 'src/app/shared/models/stock-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-paga-today',
  templateUrl: './dashboard-paga-today.component.html',
  styleUrls: ['./dashboard-paga-today.component.css']
})
export class DashboardPagaTodayComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.fechStocksToday();
  }

  async fechStocksToday(): Promise<void> {
    this.stocks = await this.dashboardService.getStockToday();
    console.log(this.stocks);
  }

}
