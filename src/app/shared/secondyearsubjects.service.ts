import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subjects } from './subjects.model';

@Injectable({
  providedIn: 'root'
})
export class SecondyearsubjectsService {

  formData : Subjects;

  constructor(private firestore: AngularFirestore) { }
  // tslint:disable-next-line: member-ordering
  subjectsList: AngularFireList<any>;

  // tslint:disable-next-line:member-ordering
  form = new FormGroup({
    $key: new FormControl(null),
    subjectCode: new FormControl('', Validators.required),
    subjectTitle: new FormControl('', Validators.required),
    year: new FormControl('', [Validators.required, Validators.min(1), Validators.max(4), Validators.pattern('^[1-4]*$')]),
    semester: new FormControl('', [Validators.required, Validators.min(1), Validators.max(2), Validators.pattern('^[1-2]*$')]),
    credit: new FormControl('', [Validators.required, Validators.min(1), Validators.max(3), Validators.pattern('^[1-3]*$')]),
    assignedLecturer1: new FormControl('', Validators.required),
    
  });

  getSecondYearSubjects(){
    return this.firestore.collection('secondyearsubjects').snapshotChanges();
  }



}