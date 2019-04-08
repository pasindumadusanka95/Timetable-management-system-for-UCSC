import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import * as Chartist from 'chartist';
import { extend } from '@syncfusion/ej2-base';
import {Internationalization} from '@syncfusion/ej2-base';
import {eventsData1Y,eventsData2Y,eventsData3Y,eventsData4Y} from '../datasource';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';


import {
  EventSettingsModel, ScheduleComponent, WorkWeekService, PopupOpenEventArgs, ResizeService, DragAndDropService,CellClickEventArgs,EventClickArgs,RecurrenceEditor, 
} from '@syncfusion/ej2-angular-schedule';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [WorkWeekService,DragAndDropService,ResizeService]
  
})
export class DashboardComponent implements OnInit {

  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings1Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData1Y, null, true) };
  public eventSettings2Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData2Y, null, true) };
  public eventSettings3Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData3Y, null, true) };
  public eventSettings4Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData4Y, null, true) };
  public showHederBar: Boolean = false;
  public views: Array<String> = ['WorkWeek'];
  public showTimeIndicator: boolean = false;
  public showQuickInfo: boolean = false;
  
  

  

  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  public instance: Internationalization = new Internationalization();

  onCellClick(args: CellClickEventArgs): void {
    this.scheduleObj.openEditor(args, 'Add');
  }
  onEventClick(args: EventClickArgs): void {
    if (!(args.event as any).RecurrenceRule) {
      this.scheduleObj.openEditor(args.event, 'Save');
    }
    else {
      this.scheduleObj.quickPopup.openRecurrenceAlert();
    }
  }

  getDateHeaderText(value: Date): string {
    return this.instance.formatDate(value, { skeleton: 'E' });
  }
  onPopupOpen(args: PopupOpenEventArgs): void {

    if (args.type === 'Editor') {

      let subjectElement: HTMLInputElement = args.element.querySelector('#Subject') as HTMLInputElement;
      if (!subjectElement.classList.contains('e-dropdownlist')) {
        let dropDownListObject: DropDownList = new DropDownList({
          placeholder: 'Choose status', value: subjectElement.value,
          dataSource: ['New', 'Requested', 'Confirmed']
        });
        dropDownListObject.appendTo(subjectElement);
      }
      let lecturerElement: HTMLInputElement = args.element.querySelector('#Lecturer') as HTMLInputElement;
      if (!lecturerElement.classList.contains('e-dropdownlist')) {
        let dropDownListObject: DropDownList = new DropDownList({
          placeholder: 'Choose Lecture', value: lecturerElement.value,
          dataSource: ['Laura', 'Nancy', 'Steven']
        });
        dropDownListObject.appendTo(lecturerElement);
      }
      let venueElement: HTMLInputElement = args.element.querySelector('#Location') as HTMLInputElement;
      if (!venueElement.classList.contains('e-dropdownlist')) {
        let dropDownListObject: DropDownList = new DropDownList({
          placeholder: 'Choose venue', value: venueElement.value,
          dataSource: ['Mumbai', 'Chennai', 'Bangalore']
        });
        dropDownListObject.appendTo(venueElement);
      }
      let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
      if (!startElement.classList.contains('e-datetimepicker')) {
        new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement).format='EEEE HH:mm';
        
        
      }
      let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
      if (!endElement.classList.contains('e-datetimepicker')) {
        new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement).format= 'EEEE HH:mm';
      }
      let recurElement: HTMLElement = args.element.querySelector('#RecurrenceEditor');
            if (!recurElement.classList.contains('e-recurrenceeditor')) {
                let recurrObject: RecurrenceEditor = new RecurrenceEditor({
                  frequencies: ['weekly'],
                });
                recurrObject.appendTo(recurElement);
                (this.scheduleObj.eventWindow as any).recurrenceEditor = recurrObject;
            }
            document.getElementById('RecurrenceEditor').style.display = (this.scheduleObj.currentAction == "EditOccurrence") ? 'none' : 'block';

            args.element.querySelectorAll('.e-round').forEach((node: HTMLElement, index: number) => {
              if (index === 0 || index === 6) {
                node.style.display = 'none';
              }
            });
}
    }
  

  constructor(private ttcs:TimeTableCRUDService) { }
   
  onDataBound1Y(event){
  
    console.log(this.eventSettings1Y.dataSource)
    // let canAdd=true;
    // for(let i of this.eventSettings2Y.dataSource as any[])
    // {
    //     if(event.StartTime.getDay()==i.StartTime.getDay() ){
    //       canAdd=false;
    //       break;
    //     }
    // }

    // if(canAdd){
      this.ttcs.setFirstYearTT(this.eventSettings1Y.dataSource)
    // }
    // else{
    //   console.log('cannot allocate')
    // }
  }


  onDataBound2Y(){
    this.ttcs.setSecondYearTT(this.eventSettings2Y.dataSource)
    console.log(this.eventSettings2Y.dataSource);
  }

  onDataBound3Y(){
    this.ttcs.setThirdYearTT(this.eventSettings3Y.dataSource)
    console.log(this.eventSettings3Y.dataSource);
  }

  onDataBound4Y(){
    this.ttcs.setFourthYearTT(this.eventSettings4Y.dataSource)
    console.log(this.eventSettings4Y.dataSource);
  }

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

      for (let i of next.data().firstyear as any[]){
        i.StartTime = i.StartTime.toDate();
        i.EndTime = i.EndTime.toDate();
        // this.eventSettings2Y.dataSource.push(i);

      }
    
      this.scheduleObj.refreshEvents()
      console.log(this.eventSettings2Y.dataSource)
    })

    this.ttcs.getThirdYearTT().subscribe(next=>{

      for (let i of next.data().firstyear as any[]){
        i.StartTime = i.StartTime.toDate();
        i.EndTime = i.EndTime.toDate();
        // this.eventSettings3Y.dataSource.push(i);

      }
    
      this.scheduleObj.refreshEvents()
      console.log(this.eventSettings3Y.dataSource)
    })

    this.ttcs.getFourthYearTT().subscribe(next=>{

      for (let i of next.data().firstyear as any[]){
        i.StartTime = i.StartTime.toDate();
        i.EndTime = i.EndTime.toDate();
        // this.eventSettings4Y.dataSource.push(i);

      }
    
      this.scheduleObj.refreshEvents()
      console.log(this.eventSettings4Y.dataSource)
    })
  }
}
