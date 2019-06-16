import { NgForm } from '@angular/forms';
import { HallsService } from './../shared/halls.service';
import { Component, OnInit } from '@angular/core';
import { HallService } from 'app/shared/hall.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Hall } from 'app/shared/hall.model';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.scss']
})
export class HallsComponent implements OnInit {
  items = ['Pizza', 'Pasta', 'Parmesan'];
  public isButtonVisible = true;
  halllist: Hall[];

// halls = ['S104','S204','W002','W001','S203','E205','E401'];  
  constructor(public hallservice: HallService, private firestore: AngularFirestore,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.hallservice.getHall().subscribe(actionArray => {
      this.halllist = actionArray.map(item=>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() 
        } as Hall;
        
        })
  });
  }
  resetForm(form?: NgForm) {
    // tslint:disable-next-line:curly
    if (form != null)
      form.resetForm();
    this.hallservice.formData = {
      id: null,
      hallID:'',
      capacity:null,
      resourceStatus: '',
    
    }
  }


    // tslint:disable-next-line:member-ordering
    submitted: boolean;
    // tslint:disable-next-line:member-ordering
    showSuccessMessage: boolean;
    // tslint:disable-next-line:member-ordering
    formControls = this.hallservice.form.controls;
  


  onSubmit(form:NgForm){
    let data = Object.assign({},form.value);
    delete data.id;
    // tslint:disable-next-line:curly
    if(form.value.id == null)
      this.firestore.collection('halls').add(data);
    // tslint:disable-next-line:curly
    else
    this.firestore.doc('halls/'+ form.value.id).update(data);
      this.resetForm(form);
      this.toastr.success('Submitted successfully','Hall Details');
  }



  
  

  

}
