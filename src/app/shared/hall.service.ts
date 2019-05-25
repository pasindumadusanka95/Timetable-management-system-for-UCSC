import { Injectable } from '@angular/core';
  // Lecturer data type interface class
// tslint:disable-next-line:max-line-length
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';  // Firebase modules for Database, Data list and Single object
import {FormControl, FormGroup, Validators} from '@angular/forms';
  import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Hall } from './hall.model';
@Injectable({
  providedIn: 'root'
})

export class HallService {
    formData : Hall;

constructor(private firestore: AngularFirestore) {}
    // tslint:disable-next-line:member-ordering
    hallList: AngularFireList<any>;
  // tslint:disable-next-line:member-ordering
  form = new FormGroup({
    $key: new FormControl(null),
    hallID: new FormControl('', Validators.required),
    capacity: new FormControl('', Validators.required),
    resourceStatus: new FormControl('')
  });


getHall(){
  return this.firestore.collection('halls').snapshotChanges();
}

getReservedHalls() {
  return this.firestore.collection('Timetable').doc('1styear').get();
}





}



