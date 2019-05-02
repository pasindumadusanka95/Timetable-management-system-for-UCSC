import { NgForm } from '@angular/forms';
import { HallsService } from './../shared/halls.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.scss']
})
export class HallsComponent implements OnInit {

  constructor(private hallsService:HallsService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.hallsService.formData = {
      id: null,
      hallName:'',
      capacity: null,
      // resources: null,
    }
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    let data = Object.assign({},form.value);
    delete data.id;
    if(form.value.id == null)
      this.firestore.collection('halls').add(data);
    else
      this.firestore.doc('halls/'+ form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully','Hall Details');
}

}
