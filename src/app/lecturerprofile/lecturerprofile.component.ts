import { Component, OnInit } from '@angular/core';
import { LecturerService } from 'app/shared/lecturer.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Lecturer } from 'app/shared/lecturer.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'app/core/user.service';
import { User } from 'app/core/user';
import { AuthService } from 'app/core/auth.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-lecturerprofile',
  templateUrl: './lecturerprofile.component.html',
  styleUrls: ['./lecturerprofile.component.scss']
})
export class LecturerprofileComponent implements OnInit {
  lecturer: Lecturer[];
  user: User;
  constructor(public service: LecturerService, private firestore: AngularFirestore,
    private userService: UserService, private authService: AuthService,
    private toastr: ToastrService) {}

  ngOnInit() {
  //   this.resetForm();
  //   this.service.getLecturers().subscribe(actionArray => {
  //     this.lecturer = actionArray.map(item => {
  //       return {
  //         id: item.payload.doc.id,
  //         ...item.payload.doc.data()
  //       } as Lecturer;

  //       })
  // });

  this.authService.getUser().subscribe( user => {
    if (user) {
      this.user = user;
    }
    console.log(this.user.email);
  });

  

  // for (const l of this.lecturer) {
  // // tslint:disable-next-line: triple-equals
  //   if (l.email == this.user.email) {
  //     this.service.formData = Object.assign ({}, l);
  //   }
  // }

  }


  // resetForm(form?: NgForm) {
  //   // tslint:disable-next-line:curly
  //   // if (form != null)
  //   //   form.resetForm();
  //   // this.service.formData = {
  //   //   id: null,
  //   //   LecturerName:'',
  //   //   Date:'',
  //   //   Time:'',
  //   //   NewDate:'',
  //   //   NewTime:'',
  //   //   Subject: '',
  //   //   Reason: '',

  //   // }
  
  // onEdit(lecturer: Lecturer) {
  //   this.service.formData = Object.assign ({}, lecturer);
  // }
}
