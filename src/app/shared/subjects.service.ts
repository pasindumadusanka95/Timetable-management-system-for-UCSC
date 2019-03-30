import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private firebase: AngularFireDatabase) { }
  subjectsList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    subjectCode: new FormControl('', Validators.required),
    subjectTitle: new FormControl('', Validators.required),
    year: new FormControl('', [Validators.pattern('^[1-4]*$')]),
    semester: new FormControl('', [Validators.pattern('^[1-2]*$')]),
    credit: new FormControl('', [Validators.pattern('^[1-3]*$')]),
  });

  getSubjects(){
    this.subjectsList = this.firebase.list('subjects');
    return this.subjectsList.snapshotChanges();
  }

  insertSubject(subjects) {
    this.subjectsList.push({
      subjectCode: subjects.subjectCode,
      subjectTitle: subjects.subjectTitle,
      year: subjects.year,
      semester: subjects.semester,
      credit: subjects.credit
    });
  }

  populateForm(subject){
    this.form.setValue(subject);
  }

  updateSubject(subjects) {
    this.subjectsList.update(subjects.$key,{
      subjectCode: subjects.subjectCode,
      subjectTitle: subjects.subjectTitle,
      year: subjects.year,
      semester: subjects.semester,
      credit: subjects.credit
    });
  }

  deleteSubject($key: string){
    this.subjectsList.remove($key);
  }

}
