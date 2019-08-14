import { Injectable } from '@angular/core';
import { Lecturer } from './lecturer.model';  // Lecturer data type interface class
// tslint:disable-next-line:max-line-length
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';  // Firebase modules for Database, Data list and Single object
import {FormControl, FormGroup, Validators} from '@angular/forms';
  import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})

export class LecturerService {
    formData: Lecturer;
    publishState: boolean;

constructor(private firestore: AngularFirestore) {
  this.publishState = false;
}
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

getLecturerByUsername(userName: string) {
  return this.firestore.collection('lecturers', ref => ref.where('userName', '==', userName)).get();
}

}



