import { Injectable } from '@angular/core';
import { Messages } from './messages.model';  // Lecturer data type interface class
// tslint:disable-next-line:max-line-length
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';  // Firebase modules for Database, Data list and Single object
import {FormControl, FormGroup, Validators} from '@angular/forms';
  import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})

export class MessageService {
    formData : Messages;

constructor(private firestore: AngularFirestore) {}
    // tslint:disable-next-line:member-ordering
    MessageList: AngularFireList<any>;
  // tslint:disable-next-line:member-ordering
  form = new FormGroup({
    $key: new FormControl(null),
    LecturerID: new FormControl('',Validators.required),
    Date: new FormControl('', Validators.required),
    Time: new FormControl('', Validators.required),
    NewDate: new FormControl('', Validators.required),
    NewTime: new FormControl('', Validators.required),
    Subject: new FormControl('',Validators.required),
    Reason: new FormControl('', Validators.required),
  
  });


getLecturers(){
  return this.firestore.collection('lecturers').snapshotChanges();
}

getMessages(){
  return this.firestore.collection('messages').snapshotChanges();
}


getSubjects(){
  return this.firestore.collection('subjects').snapshotChanges();
}




}



