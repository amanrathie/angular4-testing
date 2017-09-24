import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Dashboard } from './dashboard.model';

declare function require(path: string): any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboard : Dashboard;

  constructor(private dashboardService : DashboardService) { }

  ngOnInit() {
    require('../../../../assets/js/charts.js')();
    this.dashboard = this.dashboardService.dashboard;
  }

}
