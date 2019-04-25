import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { createElement, extend } from '@syncfusion/ej2-base';
import { Internationalization } from '@syncfusion/ej2-base';
import { eventsData2Y} from '../../datasource'
import {
  EventSettingsModel, ScheduleComponent, EventRenderedArgs, DayService, WeekService,
  WorkWeekService, MonthService, AgendaService, PopupOpenEventArgs, ResizeService, DragAndDropService, 
} from '@syncfusion/ej2-angular-schedule';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';

@Component({
  selector: 'app-view-second-year',
  templateUrl: './view-second-year.component.html',
  styleUrls: ['./view-second-year.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,DragAndDropService,ResizeService],
})
export class ViewSecondYearComponent implements OnInit {

  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings2Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData2Y, null, true) };
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

    this.ttcs.getSecondYearTT().subscribe(next=>{

      for (let i of next.data().secondyear as any[]){
        i.StartTime = i.StartTime.toDate();
        i.EndTime = i.EndTime.toDate();
        (<any[]>(this.eventSettings2Y.dataSource)).push(i);

      }
    
      this.scheduleObj.refreshEvents()
      console.log(this.eventSettings2Y.dataSource)
    })

    
    
  }
  



}
