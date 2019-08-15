import { AngularFireList } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Chat } from './chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  formData: Chat;


  constructor(private firestore: AngularFirestore) { }
  // tslint:disable-next-line: member-ordering
  chatList: AngularFireList<any>;
  // tslint:disable-next-line: member-ordering
  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    timestamp: new FormControl('', Validators.required)
  });

  getChats() {
    return this.firestore.collection('chats', ref => ref.orderBy('timestamp', 'desc')).snapshotChanges();
  }

}
