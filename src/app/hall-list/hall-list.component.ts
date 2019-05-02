import { Component, OnInit } from '@angular/core';
import { Hall } from 'app/shared/hall.model';
import { HallService } from 'app/shared/hall.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hall-list',
  templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.scss']
})
export class HallListComponent implements OnInit {
  halllist: Hall[];
  constructor(
    private hallservice: HallService,
  private firestore: AngularFirestore,
  private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.hallservice.getHall().subscribe(actionArray => {
      this.halllist = actionArray.map(item=>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() 
        } as Hall;
        
        })
  });
  }
  onEdit(hall:Hall){
    this.hallservice.formData= Object.assign ({}, hall);
   
    
  }
  
  onDelete(id:String){
    if(confirm('Are you sure to delete this record?')){
        this.firestore.doc('halls/'+ id).delete()
    this.toastr.warning('Deleted successfully!','Hall Record');
      }
  }
  
    }
  
  
  

