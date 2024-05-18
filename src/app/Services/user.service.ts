import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) { }

  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  getUserById(id: string){
    return this.afs.collection<User>('Users').doc(id).valueChanges();
  }

  createUser(user:User){
    return this.afs.collection<User>('Users').doc(user.userId).set(user);
  }

  createCartForUser(userID:string){
    let obj = {pId: []}
    return this.afs.collection<object>('Cart').doc(userID+'').set(obj);
  }


}
