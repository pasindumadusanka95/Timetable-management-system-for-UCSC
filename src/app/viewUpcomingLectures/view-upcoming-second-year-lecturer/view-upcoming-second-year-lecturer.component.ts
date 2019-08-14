import { Component, OnInit } from '@angular/core';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';

@Component({
  selector: 'app-view-upcoming-second-year-lecturer',
  templateUrl: './view-upcoming-second-year-lecturer.component.html',
  styleUrls: ['./view-upcoming-second-year-lecturer.component.scss']
})
export class ViewUpcomingSecondYearLecturerComponent implements OnInit {

  public curLecUsername;
  public currentTime ;
  public location;
  public startTime;
  public Subject;
  public currentDay;
  public databaseDay;
  public viewStartTime;

  constructor(private ttcs: TimeTableCRUDService,) {
    this.currentTime = new Date().getHours();
    this.currentDay = new Date().getDay();
   }

  ngOnInit() {

    this.curLecUsername = JSON.parse(localStorage.getItem('curLec')).userName;

    this.ttcs.getSecondYearTT().subscribe(next => {

      for (const i of next.data().secondyear as any[]) {
        this.databaseDay = i.StartTime.toDate().getDay();
        this.startTime = i.StartTime.toDate().getHours();
        this.viewStartTime = i.StartTime.toDate();
        
        this.location = i.Location;
        this.Subject = i.Subject;
        if((this.curLecUsername === i.Lecturer1) || (this.curLecUsername === i.Lecturer2) ){
          if (this.currentDay == this.databaseDay){
          
            if(this.startTime >= this.currentTime){
              console.log(this.viewStartTime)
              console.log(this.location)
              console.log(this.Subject)
           }
          
          }
         
        }
        
      }

      

    })
  }

}
