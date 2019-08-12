import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Approvetable } from './approvetable.model';

@Injectable({
  providedIn: 'root'
})
export class ApprovetablesService {
  formData : Approvetable;

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
    return this.firestore.collection('approvetables').snapshotChanges();
  }
}


