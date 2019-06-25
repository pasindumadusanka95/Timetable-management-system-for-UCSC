import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Lecturer } from 'app/shared/lecturer.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'app/core/user.service';
import { User } from 'app/core/user';
import { AuthService } from 'app/core/auth.service';
import { userInfo } from 'os';
import { LecProfileService } from 'app/shared/lec-profile.service';

@Component({
  selector: 'app-lecturerprofile',
  templateUrl: './lecturerprofile.component.html',
  styleUrls: ['./lecturerprofile.component.scss']
})
export class LecturerprofileComponent implements OnInit {
  lecturer: Lecturer[];
  user: User;
  constructor(public service: LecProfileService, private firestore: AngularFirestore,
    private userService: UserService, private authService: AuthService,
    private toastr: ToastrService) {}

  ngOnInit() {
    // this.resetForm();
    this.authService.getUser().subscribe( user => {
      if (user) {
        this.user = user;
      }
      console.log(this.user.email);
    });

    this.service.getLecturers().subscribe(actionArray => {
      this.lecturer = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Lecturer;

        })
  });

  }

  getLecturer() {
    for (const l of this.lecturer) {
  // tslint:disable-next-line: triple-equals
    if (l.email == this.user.email) {
      return l;
    }
  }
  }

  onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    this.firestore.doc('lecturers/' + form.value.id).update(data);
    this.toastr.success('Updated successfully', 'Your Details');
    console.log(form.value);
  }


  // resetForm(form?: NgForm) {
  //   tslint:disable-next-line:curly
  //   if (form != null)
  //     form.resetForm();
  //   this.service.formData = {
  //     id: null,
  //     LecturerName:'',
  //     Date:'',
  //     Time:'',
  //     NewDate:'',
  //     NewTime:'',
  //     Subject: '',
  //     Reason: '',

  //   }

  // onEdit(lecturer: Lecturer) {
  //   this.service.formData = Object.assign ({}, lecturer);
  // }
}
