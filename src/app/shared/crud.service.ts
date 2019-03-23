import { Injectable } from '@angular/core';
import { Lecturer } from '../shared/lecturer';  // Lecturer data type interface class
// tslint:disable-next-line:max-line-length
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  LecturersRef: AngularFireList<any>;    // Reference to Lecturer data list, its an Observable
  LecturerRef: AngularFireObject<any>;   // Reference to Lecturer object, its an Observable too

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Lecturer
  AddLecturer(lecturer: Lecturer) {
    this.LecturersRef.push({
      userName: lecturer.username,
      firstName: lecturer.firstname,
      lastName: lecturer.lastname,
      email: lecturer.email,
      mobileNumber: lecturer.mobileNumber
    })
  }

  // Fetch Single Lecturer Object
  GetLecturer(id: string) {
    this.LecturerRef = this.db.object('Lecturers-list/' + id);
    return this.LecturerRef;
  }

  // Fetch Lecturers List
  GetLecturersList() {
    this.LecturersRef = this.db.list('Lecturers-list');
    return this.LecturersRef;
  }

  // Update Lecturer Object
  UpdateLecturer(lecturer: Lecturer) {
    this.LecturerRef.update({
      userName: lecturer.username,
      firstName: lecturer.firstname,
      lastName: lecturer.lastname,
      email: lecturer.email,
      mobileNumber: lecturer.mobileNumber
    })
  }

  // Delete Lecturer Object
  DeleteLecturer(id: string) {
    this.LecturerRef = this.db.object('Lecturers-list/' + id);
    this.LecturerRef.remove();
  }
}
