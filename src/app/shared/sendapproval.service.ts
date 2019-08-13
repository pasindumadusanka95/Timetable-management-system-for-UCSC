import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireList } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sendapproval } from './sendapproval.model';

@Injectable({
  providedIn: 'root'
})
export class SendapprovalService {
  formData : Sendapproval;

  constructor(private firestore: AngularFirestore) { }
  // tslint:disable-next-line: member-ordering
  approvedlist: AngularFireList<any>;

  // tslint:disable-next-line:member-ordering
  form = new FormGroup({
    $key: new FormControl(null),
    reason: new FormControl('', Validators.required),
    approveStatus: new FormControl('', Validators.required),
    reasonmessage: new FormControl('', Validators.required),
   
  
    
  });

  getApproveTables(){
    return this.firestore.collection('sendapprovals').snapshotChanges();
  }
}
