import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService,TimeScaleModel,EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from '../datasource';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService]

})
export class TableListComponent implements OnInit {
  public selectedDate: Date = new Date(2018, 1, 15);
  public timeScale: TimeScaleModel = { enable: true, interval: 60, slotCount: 1 };
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
 

  constructor() { }

  ngOnInit() {
  }

}
