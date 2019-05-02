import { NgForm } from '@angular/forms';
import { SubjectsService } from './../shared/subjects.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectsService: SubjectsService,
    private firestore : AngularFirestore,
    private toastr : ToastrService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.subjectsService.form.controls;

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.subjectsService.formData = {
      id: null,
      subjectCode:'',
      subjectTitle:'',
      year: null,
      semester: null,
      credit: null,
      assignedLecturer1: null,
      assignedLecturer2: null,
    }
  }
  
  // ResetForm() {
  //   this.subjectsService.form.reset();
  //   this.submitted = false;
  // }

  onSubmit(form:NgForm){
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

    let data = Object.assign({},form.value);
    delete data.id;
    if(form.value.id == null)
      this.firestore.collection('subjects').add(data);
    else
      this.firestore.doc('subjects/'+ form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully','Subject Details');
}
}
