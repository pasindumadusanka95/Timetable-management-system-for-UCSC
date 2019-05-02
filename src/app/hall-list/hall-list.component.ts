import { Halls } from './../shared/halls.model';
import { HallsService } from './../shared/halls.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hall-list',
  templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.scss']
})
export class HallListComponent implements OnInit {

  list: Halls[];
  constructor(private hallsService:HallsService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.hallsService.getHalls().subscribe(actionArray => {
      this.list = actionArray.map(item=>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() 
        } as Halls;
        
        })
  });
  }

  // onEdit(hall:Halls){
  //   this.hallsService.formData= Object.assign ({}, hall);
  // }

  // onDelete(id:string){
  //   if(confirm('Are you sure to delete this record?')){
  //     this.firestore.doc('halls/'+ id).delete()
  //     this.toastr.warning('Deleted successfully!','Hall Record');
  //   }
  // }

}
