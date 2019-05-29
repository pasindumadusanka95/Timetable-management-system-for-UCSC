import { Component, OnInit } from '@angular/core';
import { StudentCountService } from 'app/shared/student-count.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { StudentCount } from 'app/shared/student-count.model';

@Component({
  selector: 'app-student-count-list',
  templateUrl: './student-count-list.component.html',
  styleUrls: ['./student-count-list.component.css']
})
export class StudentCountListComponent implements OnInit {
  stdlist: StudentCount[];
 x=[1,2];
  constructor(
    private stdservice: StudentCountService,
  private firestore: AngularFirestore,
  private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.stdservice.getStudentCount().subscribe(actionArray => {
      this.stdlist = actionArray.map(item=>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() 
        } as StudentCount;
        
        })
       
  });

}

onEdit(studentcount:StudentCount){
  this.stdservice.formData= Object.assign ({}, studentcount);
  
  
}

onDelete(id:String){
  if(confirm('Are you sure to delete this record?')){
      this.firestore.doc('studentcount/'+ id).delete()
  this.toastr.warning('Deleted successfully!','Student Counts Record');
    }
}


createRange(number){
  var items: number[] = [];
  for(var i = 1; i <= number; i++){
     items.push(i);
  }
  return items;
}
groups=[];
onValueChange(newvalue){
  this.groups=[];
  for(var i=0;i<newvalue;i++){
    this.groups[i]=''; 
  }
}
  }


