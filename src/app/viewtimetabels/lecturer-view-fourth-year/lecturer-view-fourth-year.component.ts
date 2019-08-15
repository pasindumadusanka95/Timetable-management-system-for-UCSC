import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { createElement, extend } from '@syncfusion/ej2-base';
import { Internationalization } from '@syncfusion/ej2-base';
import { eventsData4Y } from '../../datasource'
import {
  EventSettingsModel, ScheduleComponent, EventRenderedArgs, DayService, WeekService,
  WorkWeekService, MonthService, AgendaService, PopupOpenEventArgs, ResizeService, DragAndDropService,
} from '@syncfusion/ej2-angular-schedule';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';
import { LecturerService } from 'app/shared/lecturer.service';

@Component({
  selector: 'app-lecturer-view-fourth-year',
  templateUrl: './lecturer-view-fourth-year.component.html',
  styleUrls: ['./lecturer-view-fourth-year.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService],
})
export class LecturerViewFourthYearComponent implements OnInit {

  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings4Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData4Y, null, true) };
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

  constructor(private ttcs: TimeTableCRUDService, private lecservice: LecturerService) { }

  ngOnInit() {

    this.curLecUsername = JSON.parse(localStorage.getItem('curLec')).userName;

    this.ttcs.getFourthYearTT().subscribe(next => {

      for (const i of next.data().fourthyear as any[]) {
        if(this.lecservice.publishState){
          if((this.curLecUsername === i.Lecturer1) || (this.curLecUsername === i.Lecturer2) ){
            i.StartTime = i.StartTime.toDate();
            i.EndTime = i.EndTime.toDate();
           (<any[]>(this.eventSettings4Y.dataSource)).push(i);
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
