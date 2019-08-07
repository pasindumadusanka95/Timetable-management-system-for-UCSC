import { NgForm } from '@angular/forms';
import { SubjectsService } from './../shared/subjects.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { LecturerService } from 'app/shared/lecturer.service';
import { Lecturer } from 'app/shared/lecturer.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
username: Lecturer[];
subTypeCS:any;
subTypeIS:any;
  constructor(public subjectsService: SubjectsService,
    public lecturerservice: LecturerService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  // tslint:disable-next-line:member-ordering
  formControls = this.subjectsService.form;

  ngOnInit() {
    this.resetForm();
    this.lecturerservice.getLecturers().subscribe(actionArray => {
      this.username = actionArray.map(item => {
        const a: any = item.payload.doc.data();
        return a.userName;

        })
  });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.subjectsService.formData = {
      id: null,
      subjectCode: '',
      subjectTitle: '',
      year: null,
      semester: null,
      credit: null,
      assignedLecturer1: '',
      
    }
  }

  // ResetForm() {
  //   this.subjectsService.form.reset();
  //   this.submitted = false;
  // }

  onSubmit(form: NgForm) {
    // this.submitted = true;
    // if (this.subjectsService.form.valid) {
    //  if (this.subjectsService.form.get('$key').value == null)
    //    this.subjectsService.insertSubject(this.subjectsService.form.value);
    //  else
    //    this.subjectsService.updateSubject(this.subjectsService.form.value);
    // this.showSuccessMessage = true;
    // setTimeout(() => this.showSuccessMessage = false, 3000);
    // this.submitted = false;
    // this.subjectsService.form.reset();
    // }

    const data = Object.assign({}, form.value);
    delete data.id;
    this.subTypeCS= (data.subjectCode).charAt(3);
    this.subTypeIS= (data.subjectCode).charAt(2);
    console.log(this.subTypeCS);
    console.log("hello");
    if (form.value.id == null) {
      console.log(this.subTypeCS);
      if(this.subTypeCS=='1' || this.subTypeIS=='1'){
        this.firestore.collection('firstyearsubjects').add(data);
      }
      else if(this.subTypeCS=='2' || this.subTypeIS=='2'){
        this.firestore.collection('secondyearsubjects').add(data);
      }
      else if(this.subTypeCS=='3' || this.subTypeIS=='3'){
        this.firestore.collection('thirdyearsubjects').add(data);
      }
      else if(this.subTypeCS=='4' || this.subTypeIS=='4'){
        this.firestore.collection('fourthyearsubjects').add(data);
      }
      this.resetForm(form);
    this.toastr.success('Submitted successfully', 'Subject Details');
    }
      //this.firestore.collection('subjects').add(data);
     else {
      this.firestore.doc('subjects/' + form.value.id).update(data);

      if(this.subTypeCS=='1' || this.subTypeIS=='1'){
        this.firestore.doc('firstsubjects/' + form.value.id).update(data);
      }
      else if(this.subTypeCS=='2' || this.subTypeIS=='2'){
        this.firestore.doc('secondsubjects/' + form.value.id).update(data);
      }
      else if(this.subTypeCS=='3' || this.subTypeIS=='3'){
        this.firestore.doc('thirdsubjects/' + form.value.id).update(data);
      }
      else if(this.subTypeCS=='4' || this.subTypeIS=='4'){
        this.firestore.doc('fourthsubjects/' + form.value.id).update(data);
      }
      this.resetForm(form);
    this.toastr.info('Updated successfully', 'Subject Details');
    }
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'Subject Details');
}
}
