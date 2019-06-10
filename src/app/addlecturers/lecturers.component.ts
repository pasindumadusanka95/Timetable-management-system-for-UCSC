import { Component, OnInit } from '@angular/core';
import { LecturerService } from '../shared/lecturer.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms'; // Reactive form services
 import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import {LecturersListComponent} from '../lecturers-list/lecturers-list.component';
import {AngularFirestore} from '@angular/fire/firestore';
import { AuthService } from 'app/core/auth.service';
@Component({
  selector: 'app-add-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})

export class LecturersComponent implements OnInit {

  constructor(public service: LecturerService,
    private authService: AuthService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) {}

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    // tslint:disable-next-line:curly
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: null,
    }
  }


    // tslint:disable-next-line:member-ordering
    submitted: boolean;
    // tslint:disable-next-line:member-ordering
    showSuccessMessage: boolean;
    // tslint:disable-next-line:member-ordering
    formControls = this.service.form.controls;



  onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('lecturers').add(data);
    } else {
    this.firestore.doc('lecturers/' + form.value.id).update(data);
    }
      this.resetForm(form);
      this.toastr.success('Submitted successfully', 'Lecturer Details');
  }

  SignUp(email, password) {
    console.log(email + password);
    this.authService.SignUp(email, password);
  }




}

