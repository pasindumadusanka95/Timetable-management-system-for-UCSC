import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';  // Firebase modules for Database, Data list and Single object
import {FormControl, FormGroup, Validators} from '@angular/forms';
  import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { StudentCount } from './student-count.model';
@Injectable({
  providedIn: 'root'
})

export class StudentCountService {
    formData : StudentCount;

constructor(private firestore: AngularFirestore) {}
    // tslint:disable-next-line:member-ordering
    studentcountList: AngularFireList<any>;
  // tslint:disable-next-line:member-ordering
  form = new FormGroup({
    $key: new FormControl(null),
    registeredYear: new FormControl(null,Validators.required),
    course: new FormControl('',Validators.required),
    groupName: new FormControl('', Validators.required),
    numberofGroups: new FormControl(null,Validators.required),
    sizeofGroups: new FormControl([], Validators.required),
   
  });


getStudentCount(){
  return this.firestore.collection('studentcount').snapshotChanges();
}
getSubjects(){
  return this.firestore.collection('subjects').snapshotChanges();
}






}



