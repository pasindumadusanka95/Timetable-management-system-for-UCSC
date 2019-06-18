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



getnotifications() {
return this.firestore.collection('notifications').snapshotChanges();
}
getlecnotifications() {
  return this.firestore.collection('notifications',ref => ref.where('1', '==', 1)).snapshotChanges();
  }
}
