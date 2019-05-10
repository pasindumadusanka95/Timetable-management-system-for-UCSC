import { Injectable } from '@angular/core';
import { Halls } from './halls.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HallsService {
  formData :Halls;

  constructor(private firestore:AngularFirestore) { }

  getHalls(){
    return this.firestore.collection('halls').snapshotChanges();
  }

}
