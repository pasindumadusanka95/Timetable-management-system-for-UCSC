import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(public afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users', ref => ref.orderBy('email','asc'));
  
    this.users = this.afs.collection('users').snapshotChanges().pipe(map(changes => {
      return changes.map( a=> {
        const data = a.payload.doc.data() as User;
        data.uid = a.payload.doc.id;
        return data;
      });
    }));
  }

  getUser() {
    return this.users;
  }

  addUsers(user: User) {
    this.usersCollection.add(user);
  }


}
