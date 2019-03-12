import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService]

})
export class TableListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
