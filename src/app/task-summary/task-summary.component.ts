import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.css']
})
export class TaskSummaryComponent implements OnInit {
  taskSummary: any = {
    tasks: 0,
    stores: 0,
    users: 0,
    services: 0
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTaskSummary().subscribe(data => {
      this.taskSummary = data;
    });
  }
}
