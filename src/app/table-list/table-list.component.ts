import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { createElement, extend } from '@syncfusion/ej2-base';
import { Internationalization } from '@syncfusion/ej2-base';
import { eventsData1Y,eventsData2Y,eventsData3Y,eventsData4Y } from '../datasource';
import {
  EventSettingsModel, ScheduleComponent, EventRenderedArgs, DayService, WeekService,
  WorkWeekService, MonthService, AgendaService, PopupOpenEventArgs, ResizeService, DragAndDropService, 
} from '@syncfusion/ej2-angular-schedule';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';



@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  
  encapsulation: ViewEncapsulation.None,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,DragAndDropService,ResizeService],
  

})
export class TableListComponent implements OnInit {
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings1Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData1Y, null, true) };
  public eventSettings2Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData2Y, null, true) };
  public eventSettings3Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData3Y, null, true) };
  public eventSettings4Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData4Y, null, true) };
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

    this.ttcs.getFirstYearTT().subscribe(next=>{

      for (let i of next.data().firstyear as any[]){
        i.StartTime = i.StartTime.toDate();
        i.EndTime = i.EndTime.toDate();
        // this.eventSettings1Y.dataSource.push(i);

      }
    
      this.scheduleObj.refreshEvents()
      console.log(this.eventSettings1Y.dataSource)
    })

    this.ttcs.getSecondYearTT().subscribe(next=>{

      for (let i of next.data().secondyear as any[]){
        i.StartTime = i.StartTime.toDate();
        i.EndTime = i.EndTime.toDate();
        // this.eventSettings2Y.dataSource.push(i);

      }
    
      this.scheduleObj.refreshEvents()
      console.log(this.eventSettings2Y.dataSource)
    })

    this.ttcs.getThirdYearTT().subscribe(next=>{

      for (let i of next.data().thirdyear as any[]){
        i.StartTime = i.StartTime.toDate();
        i.EndTime = i.EndTime.toDate();
        // this.eventSettings3Y.dataSource.push(i);

      }
    
      this.scheduleObj.refreshEvents()
      console.log(this.eventSettings3Y.dataSource)
    })

    this.ttcs.getFourthYearTT().subscribe(next=>{

      for (let i of next.data().fourthyear as any[]){
        i.StartTime = i.StartTime.toDate();
        i.EndTime = i.EndTime.toDate();
        // this.eventSettings4Y.dataSource.push(i);

      }
    
      this.scheduleObj.refreshEvents()
      console.log(this.eventSettings4Y.dataSource)
    })
  }
  


}
