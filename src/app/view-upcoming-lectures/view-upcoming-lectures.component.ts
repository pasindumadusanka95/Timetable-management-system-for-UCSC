import { Component, OnInit } from '@angular/core';
import { TimeTableCRUDService } from 'app/shared/time-table-crud.service';

@Component({
  selector: 'app-view-upcoming-lectures',
  templateUrl: './view-upcoming-lectures.component.html',
  styleUrls: ['./view-upcoming-lectures.component.scss']
})
export class ViewUpcomingLecturesComponent implements OnInit {

  public time ;

  constructor(private ttcs:TimeTableCRUDService, ) { 
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
          console.log(st2)
        }
        else
        console.log("saasadasds")
       
        
        

      }
    
     
     
    })

  }

}
