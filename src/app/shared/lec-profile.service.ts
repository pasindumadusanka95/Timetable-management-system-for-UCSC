import { AngularFireList } from 'angularfire2/database';
import { Lecturer } from './lecturer.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LecProfileService {
  formData: Lecturer;

  constructor(private firestore: AngularFirestore) {}
    // tslint:disable-next-line:member-ordering
    lecturerList: AngularFireList<any>;
    // tslint:disable-next-line:member-ordering
    form = new FormGroup({
      $key: new FormControl(null),
      userName: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      email: new FormControl('', Validators.email),
      mobileNumber: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^[0-9]*$')])
    });


  getLecturers() {
    return this.firestore.collection('lecturers').snapshotChanges();
  }
}
