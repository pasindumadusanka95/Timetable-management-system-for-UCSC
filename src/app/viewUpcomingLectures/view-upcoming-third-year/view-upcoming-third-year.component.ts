import { Component, OnInit } from '@angular/core';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';

@Component({
  selector: 'app-view-upcoming-third-year',
  templateUrl: './view-upcoming-third-year.component.html',
  styleUrls: ['./view-upcoming-third-year.component.scss']
})
export class ViewUpcomingThirdYearComponent implements OnInit {

  public currentTime ;
  public location;
  public startTime;
  public Subject;
  public currentDay;
  public databaseDay;
  public viewStartTime;
  upList:any =[];
  

  constructor(private ttcs:TimeTableCRUDService,) {
    
    this.currentTime = new Date().getHours();
    this.currentDay = new Date().getDay();
   }

  ngOnInit() {

    this.ttcs.getThirdYearTT().subscribe(next=>{    
      for (let i of next.data().thirdyear as any[]){
        
        this.databaseDay = i.StartTime.toDate().getDay();
        this.startTime = i.StartTime.toDate().getHours();
        this.viewStartTime = i.StartTime.toDate();
        
        this.location = i.Location;
        this.Subject = i.Subject;
        
        
        
        if (this.currentDay == this.databaseDay){
          
          if(this.startTime >= this.currentTime){
            const obj ={
              viewStartTime:this.viewStartTime,
              location :this.location,
              Subject :this.Subject
            }
            this.upList.push(obj);
            console.log(this.viewStartTime)
            console.log(this.location)
            console.log(this.Subject)
         }
        
        }
        
        
      
       
       
       
        
        

      }
    
     
     
    })
  }
}
