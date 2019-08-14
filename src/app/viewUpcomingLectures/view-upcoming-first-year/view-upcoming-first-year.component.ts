import { Component, OnInit } from '@angular/core';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';

@Component({
  selector: 'app-view-upcoming-first-year',
  templateUrl: './view-upcoming-first-year.component.html',
  styleUrls: ['./view-upcoming-first-year.component.scss']
})
export class ViewUpcomingFirstYearComponent implements OnInit {

  public time ;
  public location;
  public startTime;
  public Subject;

  constructor(private ttcs:TimeTableCRUDService,) {
    let date = new Date();
    this.time = date.getTime(); 
    
    console.log(date.getTime())
   }

  ngOnInit() {

    this.ttcs.getFirstYearTT().subscribe(next=>{

      for (let i of next.data().firstyear as any[]){
        let st1 = i.StartTime.toDate();
        let st2 = st1.getTime();
        if (this.time < st2){
          this.Subject = i.Subject
          this.location = i.location
          this.startTime = i.StartTime.toDate()
          console.log( this.Subject,
            this.location,
            this.startTime )
        }
       
       
        
        

      }
    
     
     
    })
  }

}
