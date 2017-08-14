import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

import { TabsPage } from '../../pages/tabs/tabs';
import { UserProvider } from '../userprovider/userprovider';


@Injectable()

export class AuthProvider {


  constructor(public af: AngularFire,
    public local: Storage,
    private facebook: Facebook,
    private afDatabase: AngularFireDatabase,
    private userProvider: UserProvider,
  ) {

  }

  // Login using password
  signin(credentails) {
    return this.af.auth.login(credentails, {
      method: AuthMethods.Password,
      provider: AuthProviders.Password
    });
  }

  // Log the user in with facebook.
  loginWithFacebook() {
    return this.facebook.login(['public_profile', 'email']).then(facebookData => {
      let provider = firebase.auth.FacebookAuthProvider.credential(facebookData.authResponse.accessToken);

      firebase.auth().signInWithCredential(provider).then(firebaseData => {

        if (firebaseData) {
          this.storeToLocal(firebaseData.uid)
          let userDetails = {
            Email: firebaseData.email,
            UserName: firebaseData.displayName
          }

          // create an entry in the database for user.
          this.userProvider.createUser(userDetails, firebaseData.uid);

        }
      }, (error) => {

        throw (error);

      });

    }).catch(function (error) {
      // do nothing since the user cancelled the facebook login.get bacj to login page.
      throw (error);
    });

  }

  // Create an account for a new user and save it to realtime database.
  createAccount(credentails) {
    return this.af.auth.createUser(credentails).then(userData => {
      if (userData) {
        this.signin(credentails).then(signInData => {
          if (signInData) {
            this.storeToLocal(signInData.uid);
            let userDetails = {
              Email: signInData.auth.email,
              UserName: credentails.displayname
            }

            // create an entry in the database for user.
            this.userProvider.createUser(userDetails, signInData.uid);

          }

        });
      }


    })

  }

  // Store the uid to local db.
  storeToLocal(uid) {
    this.local.set('uid', uid);
  }

  // log the user out.
  logout() {
    this.af.auth.logout();
  }
}

