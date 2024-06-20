import { Component, OnInit, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { BrowserService } from '../browser.service';
import { DataService } from '../data.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexTitleSubtitle,
  ApexGrid
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
};

@Component({
  selector: 'app-monthly-chart',
  templateUrl: './monthly-chart.component.html',
  styleUrls: ['./monthly-chart.component.css']
})
export class MonthlyChartComponent implements OnInit {
  public chartOptions: ChartOptions;
  private chart: any;

  constructor(
    private browserService: BrowserService, private dataService: DataService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.chartOptions = {
      series: [{
        name: 'Tasks',
        data: []
      }],
      chart: {
        type: 'line',
        height: 350
      },
      xaxis: {
        categories: []
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: ''
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        }
      }
    };
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.dataService.getChartData().subscribe(chartData => {
        this.chartOptions = {
          ...this.chartOptions,
          series: chartData.series,
          xaxis: {
            ...this.chartOptions.xaxis,
            categories: chartData.categories
          }
        };
      });
    }
  }
}
