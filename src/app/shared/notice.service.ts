import { AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Notice } from './notice.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  formData: Notice;


  constructor(private firestore: AngularFirestore) { }
  // tslint:disable-next-line: member-ordering
  chatList: AngularFireList<any>;
  // tslint:disable-next-line: member-ordering
  form = new FormGroup({
    $key: new FormControl(null),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  getNotices() {
    return this.firestore.collection('notices').snapshotChanges();
  }
}
