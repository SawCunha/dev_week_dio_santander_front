import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPagaTodayComponent } from './dashboard/dashboard-paga-today/dashboard-paga-today.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent },
  { path: 'today', component: DashboardPagaTodayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
