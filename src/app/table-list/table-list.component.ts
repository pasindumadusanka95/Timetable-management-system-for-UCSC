import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { scheduleData } from '../datasource';
import { createElement, extend } from '@syncfusion/ej2-base';
import { Internationalization } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { eventsData } from '../datasource';
import {
  EventSettingsModel, ScheduleComponent, EventRenderedArgs, DayService, WeekService,
  WorkWeekService, MonthService, AgendaService, PopupOpenEventArgs, ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  
  encapsulation: ViewEncapsulation.None,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  

})
export class TableListComponent implements OnInit {
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData, null, true) };
  public showHederBar: Boolean = false;
  public views: Array<String> = ['WorkWeek'];
  public showTimeIndicator: boolean = false;

  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  public instance: Internationalization = new Internationalization();

  getDateHeaderText(value: Date): string {
    return this.instance.formatDate(value, { skeleton: 'E' });
  }
  onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'QuickInfo') {
      let startDate;
      let endDate;
      let isAllDay;
      if (args.target.classList.contains('e-work-cells')) {
        startDate = (args.data as any).startTime;
        endDate = (args.data as any).endTime;
        isAllDay = (args.data as any).isAllDay;
      }
      else {
        startDate = (args.data as any).StartTime;
        endDate = (args.data as any).EndTime;
        isAllDay = (args.data as any).IsAllDay;
      }
      let details: string = '';
      let startTimeDetail: string = this.instance.formatDate(startDate, { type: 'time', skeleton: 'short' });
      let endTimeDetail: string = this.instance.formatDate(endDate, { type: 'time', skeleton: 'short' });
      let startDateDetails = this.scheduleObj.getDayNames('wide')[startDate.getDay()];
      endDate = (isAllDay) && endDate.getHours() === 0 && endDate.getMinutes() === 0 ? new Date(endDate.setDate(endDate.getDate() - 1)) : endDate;
      let endDateDetails = this.scheduleObj.getDayNames('wide')[endDate.getDay()];
      let spanLength: number = endDate.getDate() !== startDate.getDate() &&
            (endDate.getTime() - startDate.getTime()) / (60 * 60 * 1000) < 24 ? 1 : 0;
      if (isAllDay) {
        details = startDateDetails + ' (all Day)';
        if ((endDate.getTime() -startDate.getTime()) / 86400000 > 1) {
          details += ' - ' + endDateDetails + ' (all Day)';
        }
      } else if ((((endDate.getTime() - startDate.getTime()) / 86400000) >= 1 || spanLength > 0)) {
        details = startDateDetails + ' (' + startTimeDetail + ')' + ' - ' + endDateDetails + ' (' + endTimeDetail + ')';
      } else {
        details = startDateDetails + ' (' + (startTimeDetail + ' - ' + endTimeDetail) + ')';
      }
      args.element.querySelector('.e-date-time-details').textContent = details;
    }
  }
 

  constructor() { }

  ngOnInit() {
  }

}
