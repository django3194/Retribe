import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { Camera } from 'ionic-native';
import { App } from 'ionic-angular';

import { TabsPage } from '../../pages/tabs/tabs';

@Injectable()
export class UserProvider {
  constructor(public af: AngularFire,
    public local: Storage,
    private afDatabase: AngularFireDatabase) { }

  // Get Current User's UID
  getUid() {
    return this.local.get('uid');
  }

  // Create User in Firebase
  createUser(userCredentails, uid) {

    // create an entry in the database for user.
    const toSend = this.afDatabase.object(`/Users/${uid}`);
    toSend.set(userCredentails);
  }

  // Get Info of Single User
  getUser() {

    // Getting UID of Logged In User
    return this.getUid().then(uid => {
      return this.af.database.object(`/users/${uid}`);
    });
  }


  // Get All Users of App
  getAllUsers() {
    return this.af.database.list('/users');
  }

  // Get base64 Picture of User
  getPicture() {
    let base64Picture;
    let options = {
      destinationType: 0,
      sourceType: 0,
      encodingType: 0
    };

    let promise = new Promise((resolve, reject) => {
      Camera.getPicture(options).then((imageData) => {
        base64Picture = "data:image/jpeg;base64," + imageData;
        resolve(base64Picture);
      }, (error) => {
        reject(error);
      });

    });
    return promise;
  }

  // Update Provide Picture of User
  updatePicture() {
    this.getUid().then(uid => {
      let pictureRef = this.af.database.object(`/users/${uid}/picture`);
      this.getPicture()
        .then((image) => {
          pictureRef.set(image);
        });
    });
  }
}

