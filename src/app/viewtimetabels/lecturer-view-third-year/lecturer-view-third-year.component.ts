import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { createElement, extend } from '@syncfusion/ej2-base';
import { Internationalization } from '@syncfusion/ej2-base';
import { eventsData3Y } from '../../datasource'
import {
  EventSettingsModel, ScheduleComponent, EventRenderedArgs, DayService, WeekService,
  WorkWeekService, MonthService, AgendaService, PopupOpenEventArgs, ResizeService, DragAndDropService, 
} from '@syncfusion/ej2-angular-schedule';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';

@Component({
  selector: 'app-lecturer-view-third-year',
  templateUrl: './lecturer-view-third-year.component.html',
  styleUrls: ['./lecturer-view-third-year.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,DragAndDropService,ResizeService],
})
export class LecturerViewThirdYearComponent implements OnInit {

  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings3Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData3Y, null, true) };
  public showHederBar: Boolean = false;
  public views: Array<String> = ['WorkWeek'];
  public showTimeIndicator: boolean = false;
  public readonly: boolean = true;

  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  public instance: Internationalization = new Internationalization();

  getDateHeaderText(value: Date): string {
    return this.instance.formatDate(value, { skeleton: 'E' });
  }
  
  constructor(private ttcs:TimeTableCRUDService) { }

  ngOnInit() {

    
    this.ttcs.getThirdYearTT().subscribe(next=>{

      for (let i of next.data().thirdyear as any[]){
        i.StartTime = i.StartTime.toDate();
        i.EndTime = i.EndTime.toDate();
        (<any[]>(this.eventSettings3Y.dataSource)).push(i);

      }
    
      this.scheduleObj.refreshEvents()
      console.log(this.eventSettings3Y.dataSource)
    })

    
  }

}
