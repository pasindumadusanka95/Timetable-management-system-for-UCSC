import { AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Notices } from './notices.model';
import { PrivateNoticeComponent } from 'app/private-notice/private-notice.component';

@Injectable({
  providedIn: 'root'
})
export class PrivateNoticeService {
  formData: Notices;

  constructor(private firestore: AngularFirestore,
              private priNotice: PrivateNoticeComponent) { }
  // tslint:disable-next-line: member-ordering
  chatList: AngularFireList<any>;
  // tslint:disable-next-line: member-ordering
  form = new FormGroup({
    $key: new FormControl(null),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    timestamp: new FormControl('', Validators.required)
  });

  getNotices() {
    // tslint:disable-next-line: max-line-length
    return this.firestore.collection('privateNotices', ref => ref.where('user', '==', 'this.priNotice.curLecUsername')).snapshotChanges();
  }
}