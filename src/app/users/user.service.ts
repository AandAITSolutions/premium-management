import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';

import {Observable} from 'rxjs/Observable';
import "rxjs/add/observable/of";


@Injectable()
export class UserService {

  constructor(private afs : AngularFirestore) {
    //this.userCollectionRef = afs.collection<User>('users');
    //this.users$ = this.userCollectionRef.valueChanges();
   }

  userCollectionRef : AngularFirestoreCollection<User>;
  users$ : Observable<User[]>;

  getUser(): Observable<User[]>{
    
    this.users$ = this.afs.collection<User>('users').valueChanges();
    if(this.users$){
      return this.users$;
    }else {
      return Observable.of(null);
    }
  }

}

export interface User
{
  companyId: string;
  email : string;
  firstName : string;
  lastName : string;
}