import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BrowserService } from './browser.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private chartInitialized = false;

  constructor(private http: HttpClient, private browserService: BrowserService) { }

  getChartData(): Observable<{ series: any[], categories: string[] }> {
    const chartData = {
      series: [
        {
          name: 'Tasks',
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ],
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7']
    };

    return of(chartData).pipe(delay(1000)); 
  }




  getTaskSummary(): Observable<any> {
    // Mock data
    return of({
      tasks: 120,
      stores: 90,
      users: 600,
      services: 15
    });
  }

  getTasks(): Observable<any> {
    // Mock data
    return of([
      { taskID: 'TSK001', taskName: 'Sample Task Name', cost: 'EUR 1200.00' },
      { taskID: 'TSK002', taskName: 'Sample Task Name', cost: 'EUR 1200.00' },
      { taskID: 'TSK003', taskName: 'Sample Task Name', cost: 'EUR 1200.00' },
      { taskID: 'TSK004', taskName: 'Sample Task Name', cost: 'EUR 1200.00' },
      { taskID: 'TSK005', taskName: 'Sample Task Name', cost: 'EUR 1200.00' },
      { taskID: 'TSK006', taskName: 'Sample Task Name', cost: 'EUR 1200.00' }
    ]);
  }
}
