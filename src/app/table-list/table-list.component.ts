import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { createElement, extend } from '@syncfusion/ej2-base';
import { Internationalization } from '@syncfusion/ej2-base';
import { eventsData1Y,eventsData2Y,eventsData3Y,eventsData4Y } from '../datasource'
import {
  EventSettingsModel, ScheduleComponent, EventRenderedArgs, DayService, WeekService,
  WorkWeekService, MonthService, AgendaService, PopupOpenEventArgs, ResizeService, DragAndDropService, 
} from '@syncfusion/ej2-angular-schedule';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



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
  closeResult: string;

  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  public instance: Internationalization = new Internationalization();

  getDateHeaderText(value: Date): string {
    return this.instance.formatDate(value, { skeleton: 'E' });
  }
  
  constructor(private ttcs:TimeTableCRUDService,public modalService: NgbModal,) { }

  ngOnInit() {}

  open(content) {
    this.modalService.open(content , {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    }, );
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  


}
