import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;
  
  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private ngZone: NgZone
    ) {
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      );
    }

    SignIn(email, password) {
      // if(email=='aucsc321@gmail.com'){
      //   return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      //   .then((result) => {
      //     this.ngZone.run(() => {
      //       this.router.navigate(['/dashboard']);
      //       localStorage.setItem('user', JSON.stringify(result.user));
      //     });
      //   }).catch((error) => {
      //     window.alert('Ooops! something went wrong');
      //   })
      // }
      // else if(email=='saucsc321@gmail.com'){
      //   return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      //   .then((result) => {
      //     this.ngZone.run(() => {
      //       this.router.navigate(['/superadmin']);
      //       localStorage.setItem('user', JSON.stringify(result.user));
      //     });
      //   }).catch((error) => {
      //     window.alert('Ooops! something went wrong');
      //   })
      // }
      // else{
      //   return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      //   .then((result) => {
      //     this.ngZone.run(() => {
      //       this.router.navigate(['/lecturer']);
      //       localStorage.setItem('user', JSON.stringify(result.user));
      //     });
      //   }).catch((error) => {
      //     window.alert('Ooops! something went wrong');
      //   })
      // }
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.ngZone.run(() => {
            if(email=='aucsc321@gmail.com'){
              this.router.navigate(['/dashboard']);
            }
            else if(email=='saucsc321@gmail.com'){
              this.router.navigate(['/superadmin']);
            }
            else{
              this.router.navigate(['/lecturer']);
            }
            // this.router.navigate(['/superadmin']);
            localStorage.setItem('user', JSON.stringify(result.user));
          });
        }).catch((error) => {
          window.alert('Ooops! something went wrong');
        })
    }
  
    getUser() {
      return this.user;
    }

    SignUp(email, password) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          this.SetUserData(result.user);
        }).catch((error) => {
          window.alert('Please Enter Valid Details.')
        })
    }

    ForgotPassword(passwordResetEmail) {
      return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
    }

    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null) ? true : false;
    }

    SetUserData(user) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      const data: User = {
        uid: user.uid,
        email: user.email,
        roles: {
          lecturer: true
        }
      }
      return userRef.set(data, {
        merge: true
      })
    }
    
    SignOut() {
      return this.afAuth.auth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['']);
      })
    }

    // private updateUserData(user) {
    //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    //   const data: User = {
    //     uid: user.uid,
    //     email: user.email,
    //     roles: {
    //       admin: true
    //     }
    //   }
    //   return userRef.set(data, { merge: true })
    // }

}
