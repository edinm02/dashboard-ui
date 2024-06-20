import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {
  displayedColumns: string[] = ['taskID', 'taskName', 'cost'];
  dataSource = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTasks().subscribe(data => {
      this.dataSource = data;
    });
  }
}
