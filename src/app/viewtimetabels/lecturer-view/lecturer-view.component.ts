import { Lecturer } from './../../shared/lecturer.model';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { createElement, extend } from '@syncfusion/ej2-base';
import { Internationalization } from '@syncfusion/ej2-base';
import { eventsData1Y} from '../../datasource'
import {
  EventSettingsModel, ScheduleComponent, EventRenderedArgs, DayService, WeekService,
  WorkWeekService, MonthService, AgendaService, PopupOpenEventArgs, ResizeService, DragAndDropService,
} from '@syncfusion/ej2-angular-schedule';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';
import { User } from 'app/core/user';
import { AuthService } from 'app/core/auth.service';
import { LecProfileService } from 'app/shared/lec-profile.service';


@Component({
  selector: 'app-lecturer-view',
  templateUrl: './lecturer-view.component.html',
  styleUrls: ['./lecturer-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService],
})
export class LecturerViewComponent implements OnInit {

  public selectedDate: Date = new Date(2019, 7, 1);
  public eventSettings1Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData1Y, null, true) };
  public showHederBar: Boolean = false;
  public views: Array<String> = ['WorkWeek'];
  public showTimeIndicator = false;
  public readonly = true;
  lecturer: Lecturer[];
  user: User;
  public curLec: Lecturer;

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
      // tslint:disable-next-line: max-line-length
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


  constructor(private ttcs: TimeTableCRUDService,
    public service: LecProfileService,
    private authService: AuthService) { }

  ngOnInit() {

    this.authService.getUser().subscribe( user => {
      if (user) {
      this.user = user;
      }
      console.log(this.user.email);
    });

    this.service.getLecturers().subscribe(actionArray => {
    this.lecturer = actionArray.map(item => {
    return {
      id: item.payload.doc.id,
      ...item.payload.doc.data()
    } as Lecturer;

    })
    });

    this.curLec = JSON.parse(localStorage.getItem('curLec'));
    console.log(this.curLec.userName);

    // this.ttcs.getFirstYearTT().subscribe(next => {

    //   for (const i of next.data().firstyear as any[]) {
    //     i.StartTime = i.StartTime.toDate();
    //     i.EndTime = i.EndTime.toDate();
    //     (<any[]>(this.eventSettings1Y.dataSource)).push(i);

    //   }

    //   this.scheduleObj.refreshEvents()
    //   console.log(this.eventSettings1Y.dataSource)
    // })
  }

  getLecturer() {
    for (const l of this.lecturer) {
    // tslint:disable-next-line: triple-equals
        if (l.email == this.user.email) {
            localStorage.setItem('curLec', JSON.stringify(l));
            return l;
        }
    }
  }

}
