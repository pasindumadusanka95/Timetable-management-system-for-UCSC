import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
 import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import {LecturersListComponent} from '../lecturers-list/lecturers-list.component';

@Component({
  selector: 'app-add-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})

export class LecturersComponent implements OnInit {
  public lecturerForm: FormGroup;  // Define FormGroup to Lecturer's form

  // constructor(
  //   public crudApi: CrudService,  // CRUD API services
    // public fb: FormBuilder,       // Form Builder service for Reactive forms
  //   public toastr: ToastrService  // Toastr service for alert message
  // ) { }


  // ngOnInit() {
  //  // this.crudApi.GetLecturersList();  // Call GetLecturersList() before main form is being called
  //   this.lectureForm();              // Call Lecturer form when component is ready
  // }

  // Reactive Lecturer form
  // lectureForm() {
  //     this.lecturerForm = this.fb.group({
  //       userName: [''],
  //     firstName: ['', [Validators.required, Validators.minLength(2)]],
  //     lastName: [''],
  //     email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
  //     mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
  //   })
  // }

  // Accessing form control using getters

  get userName() {
    return this.lecturerForm.get('userName');
  }

  get firstName() {
    return this.lecturerForm.get('firstName');
  }

  get lastName() {
    return this.lecturerForm.get('lastName');
  }

  get email() {
    return this.lecturerForm.get('email');
  }

  get mobileNumber() {
    return this.lecturerForm.get('mobileNumber');
  }


  // Reset Lecturer form's values
  ResetForm() {
    this.crudService.form.reset();
  }

  // submitLecturerData() {
  //   this.crudApi.AddLecturer(this.lecturerForm.value); // Submit Lecturer data using CRUD API
  //    this.toastr.success(this.lecturerForm.controls['firstName'].value + ' successfully added!');
  //    // Show success message when data is successfully submited
  //   this.ResetForm();  // Reset form when clicked on reset button
  //  };

  constructor(private crudService: CrudService) {}

    // tslint:disable-next-line:member-ordering
    submitted: boolean;
    // tslint:disable-next-line:member-ordering
    showSuccessMessage: boolean;
    // tslint:disable-next-line:member-ordering
    formControls = this.crudService.form.controls;
  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.crudService.form.valid) {
     if (this.crudService.form.get('$key').value == null) {
      this.crudService.insertLecturer(this.crudService.form.value);
     } else {
       this.crudService.updateLecturer(this.crudService.form.value);
     }
     this.showSuccessMessage = true;
     setTimeout(() => this.showSuccessMessage = false, 3000);
     this.submitted = false;
     this.crudService.form.reset();
     }
  }

}

