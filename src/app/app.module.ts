import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { MonthlyChartComponent } from './monthly-chart/monthly-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserService } from './browser.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskSummaryComponent,
    TasksTableComponent,
    MonthlyChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    NgApexchartsModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    BrowserService,
    DataService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
