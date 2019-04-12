import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import * as Chartist from 'chartist';
import { extend } from '@syncfusion/ej2-base';
import {Internationalization} from '@syncfusion/ej2-base';
import {eventsData3Y} from '../../datasource';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';


import {
  EventSettingsModel, ScheduleComponent, WorkWeekService, PopupOpenEventArgs, ResizeService, DragAndDropService,CellClickEventArgs,EventClickArgs,RecurrenceEditor, 
} from '@syncfusion/ej2-angular-schedule';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';


@Component({
  selector: 'app-third-year',
  templateUrl: './third-year.component.html',
  styleUrls: ['./third-year.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [WorkWeekService,DragAndDropService,ResizeService]
})
export class ThirdYearComponent implements OnInit {

  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings3Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData3Y, null, true) };
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

    if (args.type === 'RecurrenceAlert') {
      args.cancel = true;
      this.scheduleObj.openEditor(args.data.event, 'EditSeries');
    }

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

  onDataBound3Y(event){
  
    console.log(this.eventSettings3Y.dataSource)
    // let canAdd=true;
    // for(let i of this.eventSettings2Y.dataSource as any[])
    // {
    //     if(event.StartTime.getDay()==i.StartTime.getDay() ){
    //       canAdd=false;
    //       break;
    //     }
    // }
    
    this.ttcs.setThirdYearTT(this.eventSettings3Y.dataSource)

      
    // }
    // else{
    //   console.log('cannot allocate')
    // }
  }

  ngOnInit() {

    this.ttcs.getThirdYearTT().subscribe(next=>{

      for (let i of next.data().thirdyear as any[]){
        i.StartTime = i.StartTime.toDate();
        i.EndTime = i.EndTime.toDate();
        //this.eventSettings3Y.dataSource.push(i);

      }
    
      this.scheduleObj.refreshEvents()
      console.log(this.eventSettings3Y.dataSource)
    
    })
  }

}
