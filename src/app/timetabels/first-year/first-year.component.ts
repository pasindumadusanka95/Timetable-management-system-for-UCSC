import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import * as Chartist from 'chartist';
import { extend, Collection } from '@syncfusion/ej2-base';
import {Internationalization} from '@syncfusion/ej2-base';
import {eventsData1Y,eventsData2Y} from '../../datasource';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';


import {
  EventSettingsModel, ScheduleComponent, WorkWeekService, PopupOpenEventArgs, ResizeService, DragAndDropService,CellClickEventArgs,EventClickArgs,RecurrenceEditor, 
} from '@syncfusion/ej2-angular-schedule';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';
import { Key } from 'protractor';
import { SubjectsService } from 'app/shared/subjects.service';
import { LecturerService } from 'app/shared/lecturer.service';
import { HallService } from 'app/shared/hall.service';

@Component({
  selector: 'app-first-year',
  templateUrl: './first-year.component.html',
  styleUrls: ['./first-year.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [WorkWeekService,DragAndDropService,ResizeService]
})
export class FirstYearComponent implements OnInit {

  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings1Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData1Y, null, true) };
  public eventSettings2Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData2Y, null, true) };
  public showHederBar: Boolean = false;
  public views: Array<String> = ['WorkWeek'];
  public showTimeIndicator: boolean = false;
  public showQuickInfo: boolean = false;
  public sub_list: Array<any> = [];
  public lec_list: Array<any> = [];
  public venue_list: Array<any> = [];
  public enableAppointmentResize:boolean = true;
  public st2y;
  public loc2y;


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
      let data: { [key: string]: Object } = args.data as { [key: string]: Object }; 
      this.scheduleObj.openEditor(data.event, 'EditSeries'); 
    } 


    if (args.type === 'Editor') {

      let subjectElement: HTMLInputElement = args.element.querySelector('#Subject') as HTMLInputElement;
      if (!subjectElement.classList.contains('e-dropdownlist')) {
        let dropDownListObject: DropDownList = new DropDownList({
          placeholder: 'Choose Subject', value: subjectElement.value,
          dataSource: this.sub_list
        });
        dropDownListObject.appendTo(subjectElement);
      }
      let lecturerElement1: HTMLInputElement = args.element.querySelector('#Lecturer1') as HTMLInputElement;
      if (!lecturerElement1.classList.contains('e-dropdownlist')) {
        let dropDownListObject: DropDownList = new DropDownList({
          placeholder: 'Choose Lecturer', value: lecturerElement1.value,
          dataSource: this.lec_list
        });
        dropDownListObject.appendTo(lecturerElement1);
      }
      let lecturerElement2: HTMLInputElement = args.element.querySelector('#Lecturer2') as HTMLInputElement;
      if (!lecturerElement2.classList.contains('e-dropdownlist')) {
        let dropDownListObject: DropDownList = new DropDownList({
          placeholder: 'Choose Lecturer', value: lecturerElement2.value,
          dataSource: this.lec_list
        });
        dropDownListObject.appendTo(lecturerElement2);
      }
      let venueElement: HTMLInputElement = args.element.querySelector('#Location') as HTMLInputElement;
      if (!venueElement.classList.contains('e-dropdownlist')) {
        let dropDownListObject: DropDownList = new DropDownList({
          placeholder: 'Choose Venue', value: venueElement.value,
          dataSource: this.venue_list
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
              }});

              
            
}
    }

  constructor(private ttcs:TimeTableCRUDService, private scs: SubjectsService, private lcs: LecturerService, private hcs: HallService ) { }

  onDataBound1Y(event){
    let startTime = event.data.StartTime
    let endTime = event.data.EndTime
    let lecturer = event.data.Lecturer
    let location = event.data.Location

    

    
    this.ttcs.checkReservedSlots(startTime,endTime , lecturer, location).subscribe((hall)=> {
      console.log(hall);
    });
        this.ttcs.setFirstYearTT(this.eventSettings1Y.dataSource)
      }

    
  

  ngOnInit() {

    this.ttcs.getFirstYearTT().subscribe(next=>{

      for (let i of next.data().firstyear as any[]){
        i.StartTime = i.StartTime.toDate();
        i.EndTime = i.EndTime.toDate();
         (<any[]>(this.eventSettings1Y.dataSource)).push(i);

      }
    
      this.scheduleObj.refreshEvents()
      
    
    });

    this.scs.getSubjects().subscribe(actionArray => {
      this.sub_list = actionArray.map(item=>{
        let a:any=item.payload.doc.data();
        return a.subjectCode
      }) 

        
  });

    this.lcs.getLecturers().subscribe(actionArray => {
      this.lec_list = actionArray.map(item=>{
        let a:any=item.payload.doc.data();
        return a.userName
      }) 

      
  });

    this.hcs.getHall().subscribe(actioArray => {
      this.venue_list = actioArray.map(item=>{
        let a:any=item.payload.doc.data();
        return a.hallID
      })
    })

  

  
  }

}
