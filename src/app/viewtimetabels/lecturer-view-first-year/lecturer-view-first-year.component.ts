import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { createElement, extend } from '@syncfusion/ej2-base';
import { Internationalization } from '@syncfusion/ej2-base';
import { eventsData1Y} from '../../datasource'
import {
  EventSettingsModel, ScheduleComponent, EventRenderedArgs, DayService, WeekService,
  WorkWeekService, MonthService, AgendaService, PopupOpenEventArgs, ResizeService, DragAndDropService,
} from '@syncfusion/ej2-angular-schedule';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';
import { LecturerService } from 'app/shared/lecturer.service';


@Component({
  selector: 'app-lecturer-view-first-year',
  templateUrl: './lecturer-view-first-year.component.html',
  styleUrls: ['./lecturer-view-first-year.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService],
})
export class LecturerViewFirstYearComponent implements OnInit {

  public selectedDate: Date = new Date(2019, 7, 1);
  public eventSettings1Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData1Y, null, true) };
  public showHederBar: Boolean = false;
  public views: Array<String> = ['WorkWeek'];
  public showTimeIndicator = false;
  public readonly = true;
  public curLecUsername;


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
      } else {
        startDate = (args.data as any).StartTime;
        endDate = (args.data as any).EndTime;
        isAllDay = (args.data as any).IsAllDay;
      }
      let details = '';
      const startTimeDetail: string = this.instance.formatDate(startDate, { type: 'time', skeleton: 'short' });
      const endTimeDetail: string = this.instance.formatDate(endDate, { type: 'time', skeleton: 'short' });
      const startDateDetails = this.scheduleObj.getDayNames('wide')[startDate.getDay()];
      endDate = (isAllDay) && endDate.getHours() === 0 && endDate.getMinutes() === 0 ? new Date(endDate.setDate(endDate.getDate() - 1)) : endDate;
      const endDateDetails = this.scheduleObj.getDayNames('wide')[endDate.getDay()];
      const spanLength: number = endDate.getDate() !== startDate.getDate() &&
            (endDate.getTime() - startDate.getTime()) / (60 * 60 * 1000) < 24 ? 1 : 0;
      if (isAllDay) {
        details = startDateDetails + ' (all Day)';
        if ((endDate.getTime() - startDate.getTime()) / 86400000 > 1) {
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

  constructor(private ttcs: TimeTableCRUDService, private lecservice: LecturerService ) { }

  ngOnInit() {

    this.curLecUsername = JSON.parse(localStorage.getItem('curLec')).userName;

    this.ttcs.getFirstYearTT().subscribe(next => {
      

      for (const i of next.data().firstyear as any[]) {
        if(this.lecservice.publishState){
          if((this.curLecUsername === i.Lecturer1) || (this.curLecUsername === i.Lecturer2) ){
            i.StartTime = i.StartTime.toDate();
            i.EndTime = i.EndTime.toDate();
           (<any[]>(this.eventSettings1Y.dataSource)).push(i);
           this.scheduleObj.refreshEvents()
          }
          else{
            this.scheduleObj.refreshEvents()
          }
        }
        
      }

      

    })
    



}


}
