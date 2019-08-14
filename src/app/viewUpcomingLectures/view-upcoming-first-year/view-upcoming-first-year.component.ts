import { Component, OnInit } from '@angular/core';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';
import { format } from 'util';

@Component({
  selector: 'app-view-upcoming-first-year',
  templateUrl: './view-upcoming-first-year.component.html',
  styleUrls: ['./view-upcoming-first-year.component.scss']
})
export class ViewUpcomingFirstYearComponent implements OnInit {

  public currentTime ;
  public location;
  public startTime;
  public Subject;
  public currentDay;
  public databaseDay;
  public viewHours;
  public viewMintues;
  public show;
  public temp;

  constructor(private ttcs:TimeTableCRUDService,) {
    
    this.currentTime = new Date().getHours();
    this.currentDay = new Date().getDay();
   }

  ngOnInit() {

    this.ttcs.getFirstYearTT().subscribe(next=>{    
      for (let i of next.data().firstyear as any[]){
        
        this.databaseDay = i.StartTime.toDate().getDay();
        this.startTime = i.StartTime.toDate().getHours();
        this.viewHours = i.StartTime.toDate();
        this.viewMintues = i.StartTime.toDate().getMinutes();

        this.location = i.Location;
        this.Subject = i.Subject;
        
        // console.log(this.currentTime)
        // console.log(this.startTime)

        
        if (this.currentDay == this.databaseDay){
          
          if(this.startTime >= this.currentTime){
            console.log(this.viewHours)
            console.log(this.location)
            console.log(this.Subject)
         }
        
        }
        
        
      
        // if (this.time < st2){
         
        //   this.Subject = i.Subject
        //   this.location = i.location
        //   this.startTime = i.StartTime.toDate()
          
        // }
       
       
        
        

      }
    
     
     
    })
  }

}
