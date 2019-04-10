import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TimeTableCRUDService {

  constructor(public db: AngularFirestore) {}

  // getAvatars(){
  //     return this.db.collection('/avatar').valueChanges()
  // }

  // getUser(userKey){
  //   return this.db.collection('users').doc(userKey).snapshotChanges();
  // }

  // updateUser(userKey, value){
  //   value.nameToSearch = value.name.toLowerCase();
  //   return this.db.collection('users').doc(userKey).set(value);
  // }

  // deleteUser(userKey){
  //   return this.db.collection('users').doc(userKey).delete();
  // }

  getFirstYearTT(){
    return this.db.collection('Timetable').doc('1styear').get();
  }
  getSecondYearTT(){
    return this.db.collection('Timetable').doc('2ndyear').get();
  }
  getThirdYearTT(){
    return this.db.collection('3YTimetable').doc('3rdyear').get();
  }
  getFourthYearTT(){
    return this.db.collection('4YTimetable').doc('4thyear').get();
  }

  // searchUsers(searchValue){
  //   return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
  //     .where('nameToSearch', '<=', searchValue + '\uf8ff'))
  //     .snapshotChanges()
  // }

  // searchUsersByAge(value){
  //   return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  // }


  setFirstYearTT(object){
    const doc = this.db.collection('Timetable').doc('1styear').set({firstyear:object});
  }
  setSecondYearTT(object){
    const doc = this.db.collection('Timetable').doc('2ndyear').set({secondyear:object});
  }
  setThirdYearTT(object){
    const doc = this.db.collection('3YTimetable').doc('3rdyear').set({thirdyear:object});
  }
  setFourthYearTT(object){
    const doc = this.db.collection('4YTimetable').doc('4thyear').set({fourthyear:object});
  }
}