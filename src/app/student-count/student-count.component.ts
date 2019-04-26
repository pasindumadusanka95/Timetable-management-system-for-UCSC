import { Component, OnInit } from '@angular/core';
import { StudentCountService } from 'app/shared/student-count.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.scss']
})
export class StudentCountComponent implements OnInit {

  constructor(public StudentCountservice: StudentCountService, private firestore: AngularFirestore,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    // tslint:disable-next-line:curly
    if (form != null)
      form.resetForm();
    this.StudentCountservice.formData = {
      id: null,
      registeredYear:null,
      course:'',
      groupName: '',
      numberofGroups: null,
      sizeofGroups: null,
    }
  }

 
 

    // tslint:disable-next-line:member-ordering
    submitted: boolean;
    // tslint:disable-next-line:member-ordering
    showSuccessMessage: boolean;
    // tslint:disable-next-line:member-ordering
    formControls = this.StudentCountservice.form.controls;
  


  onSubmit(form:NgForm){
    let data = Object.assign({},form.value);
    delete data.id;
    // tslint:disable-next-line:curly
    if(form.value.id == null)
      this.firestore.collection('studentcount').add(data);
    // tslint:disable-next-line:curly
    else
    this.firestore.doc('studentcount/'+ form.value.id).update(data);
      this.resetForm(form);
      this.toastr.success('Submitted successfully','Student Groups Details');
  }


}
