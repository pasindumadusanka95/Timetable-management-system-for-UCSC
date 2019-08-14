import { Component, OnInit } from '@angular/core';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';

@Component({
  selector: 'app-view-upcoming-fourth-year',
  templateUrl: './view-upcoming-fourth-year.component.html',
  styleUrls: ['./view-upcoming-fourth-year.component.scss']
})
export class ViewUpcomingFourthYearComponent implements OnInit {

  public currentTime ;
  public location;
  public startTime;
  public Subject;
  public currentDay;
  public databaseDay;
  public viewStartTime;

  constructor(private ttcs:TimeTableCRUDService,) {
    
    this.currentTime = new Date().getHours();
    this.currentDay = new Date().getDay();
   }

   ngOnInit() {

    this.ttcs.getFourthYearTT().subscribe(next=>{    
      for (let i of next.data().fourthyear as any[]){
        
        this.databaseDay = i.StartTime.toDate().getDay();
        this.startTime = i.StartTime.toDate().getHours();
        this.viewStartTime = i.StartTime.toDate();
        
        this.location = i.Location;
        this.Subject = i.Subject;
        
        
        
        if (this.currentDay == this.databaseDay){
          
          if(this.startTime >= this.currentTime){
            console.log(this.viewStartTime)
            console.log(this.location)
            console.log(this.Subject)
         }
        
        }
        
        
      
       
       
       
        
        

      }
    
     
     
    })
  }

}
