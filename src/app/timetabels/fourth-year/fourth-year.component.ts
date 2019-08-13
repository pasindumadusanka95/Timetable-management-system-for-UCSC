import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import * as Chartist from 'chartist';
import { extend } from '@syncfusion/ej2-base';
import {Internationalization} from '@syncfusion/ej2-base';
import {eventsData4Y} from '../../datasource';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';


import {
  EventSettingsModel, ScheduleComponent, WorkWeekService, PopupOpenEventArgs, ResizeService, DragAndDropService,CellClickEventArgs,EventClickArgs,RecurrenceEditor, 
} from '@syncfusion/ej2-angular-schedule';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';
import { SubjectsService } from 'app/shared/subjects.service';
import { LecturerService } from 'app/shared/lecturer.service';
import { HallService } from 'app/shared/hall.service';
import { take } from "rxjs/operators";

@Component({
  selector: 'app-fourth-year',
  templateUrl: './fourth-year.component.html',
  styleUrls: ['./fourth-year.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [WorkWeekService,DragAndDropService,ResizeService]
})
export class FourthYearComponent implements OnInit {

  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings4Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData4Y, null, true) };
  public showHederBar: Boolean = false;
  public views: Array<String> = ['WorkWeek'];
  public showTimeIndicator: boolean = false;
  public showQuickInfo: boolean = false;
  public sub_list: Array<any> = []; 
  public lec_list: Array<any> = [];
  public venue_list: Array<any> = [];


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
      let groupElement: HTMLInputElement = args.element.querySelector(
        "#GroupName"
      ) as HTMLInputElement;
      if (!groupElement.classList.contains("e-dropdownlist")) {
        let dropDownListObject: DropDownList = new DropDownList({
          placeholder: "Choose Group",
          value: groupElement.value,
          dataSource: ["Group 1", "Group 2", "All Groups"]
        });
        dropDownListObject.appendTo(groupElement);
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

  constructor(private ttcs:TimeTableCRUDService ,private scs: SubjectsService, private lcs: LecturerService, private hcs: HallService ) { }

  onDataBound4Y(event){
    let startTime = event.data.StartTime;
    let endTime = event.data.EndTime;
    let lecturer1 = event.data.Lecturer1;
    let lecturer2 = event.data.Lecturer2;
    let location = event.data.Location;

    let isAdd: boolean;
    
    this.ttcs.checkReservedSlots(startTime, endTime, lecturer1, lecturer2, location).pipe(take(1)).subscribe(
      
        (result: any) => {
          console.log('result', result);
          
          isAdd = false;
          if (result.isConflicts) {
            console.log('if called')
            let notification = confirm(
              "There is a conflict. \nReasons : \n1). Hall reserved, " +
                result.isHallReserved +
                "\n1). Lecture1 reserved, " +
                result.isLecture1Reserved +
                "\n1). Lecturer2 reserved, " +
                result.isLecture2Reserved
            );
            

            if (notification){
              let confirmMsg = confirm(
                "There is a conflict! Do you want to create the slot" 
                  
              );

              if(confirmMsg){
                this.ttcs.setFourthYearTT(this.eventSettings4Y.dataSource)
                isAdd = true;
              }
              else{
                isAdd = false;
              }
  
            }
            isAdd = false;
           
          

          }else{
            console.log('else called')
            this.ttcs.setFourthYearTT(this.eventSettings4Y.dataSource)
            isAdd = true
          }
        },
        error => console.log(error)
      );
  }

  ngOnInit() {

    this.ttcs.getFourthYearTT().subscribe(next=>{

      for (let i of next.data().fourthyear as any[]){
        i.StartTime = i.StartTime.toDate();
        i.EndTime = i.EndTime.toDate();
        (<any[]>(this.eventSettings4Y.dataSource)).push(i);
      }
    
      this.scheduleObj.refreshEvents()
      
    
    });

    this.scs.getFourthYrSubjects().subscribe(actionArray => {
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
