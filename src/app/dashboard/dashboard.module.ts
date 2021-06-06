import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { DashboardPagaTodayComponent } from './dashboard-paga-today/dashboard-paga-today.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    StockCardComponent,
    DashboardPagaTodayComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [],
})
export class DashboardModule { }
