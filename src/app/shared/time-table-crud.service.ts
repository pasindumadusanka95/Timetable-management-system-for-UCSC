import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';


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
    return this.db.collection('Timetable').doc('3rdyear').get();
  }
  getFourthYearTT(){
    return this.db.collection('Timetable').doc('4thyear').get();
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
    const doc = this.db.collection('Timetable').doc('3rdyear').set({thirdyear:object});
  }
  setFourthYearTT(object){
    const doc = this.db.collection('Timetable').doc('4thyear').set({fourthyear:object});
  }


  checkReservedSlots(startTime: Date, endTime: Date, lecturer1: string, lecturer2: string, location: string) {

    return this.db.collection('Timetable').get().pipe(
      take(1),
      map(actioArray => {
        let hallsObservable: any = {
          isConflicts:false
      };

        actioArray.forEach(item =>{
          let years:any=item.data();
          // console.log('item', years);
          for (let key of Object.keys(years)) {
            if (hallsObservable.isConflicts) return;

            let year = years[key];
            console.log('year', year)
            year.every(item => {
              let isHallReserved = false;
              let isLecture1Reserved = false;
              let isLecture2Reserved = false;
              let stTime = startTime.getTime()/1000;
              let enTime = endTime.getTime()/1000;
              
              

              if((item.StartTime.seconds >= stTime && item.StartTime.seconds < enTime)
                || (item.EndTime.seconds > stTime && item.EndTime.seconds <= enTime) || (item.StartTime.seconds <= stTime && item.EndTime.seconds >= enTime)) {

                  if(item.Location == location) {
                    isHallReserved = true;
                  }
                  if(item.Lecturer1 == lecturer1) {
                    isLecture1Reserved = true;
                  }
                  if(item.Lecturer2 == lecturer2) {
                    isLecture2Reserved = true;
                  }
                  
                  console.log('inside if', isHallReserved == true || isLecture1Reserved == true || isLecture2Reserved == true);
                  if (isHallReserved == true || isLecture1Reserved == true || isLecture2Reserved == true) {
                    
                    hallsObservable = {
                      isConflicts: true,
                      isHallReserved: isHallReserved,
                      isLecture1Reserved: isLecture1Reserved,
                      isLecture2Reserved: isLecture2Reserved
                    };
                  // return;

                  } else {
                    // hallsObservable = {
                    //     isConflicts:false
                    // };
                  }

              } else{
                console.log('here')
                // hallsObservable = {
                //   isConflicts: false
                // }
                console.log()
              }
            });

          }
        });

        return hallsObservable;

      })
    );

  }


}
