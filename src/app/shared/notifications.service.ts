import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireList } from 'angularfire2/database';
import { FormGroup, FormControl } from '@angular/forms';
import { Notifications } from './notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  formData: Notifications;
  constructor(private firestore: AngularFirestore) { }


notificationsList: AngularFireList<any>;



getxnotifications() {
return this.firestore.collection('notifications', ref => ref.where('1', '==', 2).where('3', '==', 0)).snapshotChanges();
}
getlecnotifications() {
  return this.firestore.collection('notifications', ref => ref.where('1', '==', 1).where('3', '==', 0)).snapshotChanges();
  // const username = JSON.parse(localStorage.getItem('user')).userName;
  // return this.firestore.collection('notifications', ref => ref.where('1', '==', 1).where('3','==', 0
  // ).where('4', '==', username)).snapshotChanges();
  }

  getsupernotifications() {
    return this.firestore.collection('notifications', ref => ref.where('1', '==', 0).where('3', '==', 0)).snapshotChanges();
    }

  //   getcountnotification(){
  //     return this.firestore.collection('notifications',ref => ref.where('1', '==', 2
  // ) && ref.where('3','==', 0)).doc("counts").get().subscribe(doc=>{
  //       console.log(doc.count)
  //       })


    updateCounter(id) {
      return this.firestore.collection('notifications').doc(id).set({ 3: 1 }, { merge: true });
 }
  }
