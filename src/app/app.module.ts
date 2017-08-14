import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook'
import { NavController } from 'ionic-angular'

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { UsersPage } from '../pages/users/users';
import { ChatsPage } from '../pages/chats/chats';
import { AccountPage } from '../pages/account/account';
import { ChatViewPage } from '../pages/chat-view/chat-view';
import { SignUpPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { SlidesPage } from '../pages/slides/slides';

import { AuthProvider } from '../providers/authprovider/authprovider';
import { ChatsProvider } from '../providers/chats-provider/chats-provider';
import { UserProvider } from '../providers/userprovider/userprovider';
import { UtilProvider } from '../providers/utils';

export const firebaseConfig = {
  apiKey: "AIzaSyAaDRWKpmVN1MUibhJeH0e5anN9ypN8Z6E",
    authDomain: "retribe-c906e.firebaseapp.com",
    databaseURL: "https://retribe-c906e.firebaseio.com",
    projectId: "retribe-c906e",
    storageBucket: "retribe-c906e.appspot.com",
    messagingSenderId: "893412103274",
};



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    UsersPage,
    ChatsPage,
    AccountPage,
    HomePage,
    SettingsPage,
    SlidesPage,
    SignUpPage,
    ChatViewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    UsersPage,
    ChatsPage,
    AccountPage,
    HomePage,
    SettingsPage,
    SlidesPage,
    ChatViewPage,
    SignUpPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  AuthProvider, ChatsProvider, UserProvider, UtilProvider, Storage,Facebook]
})
export class AppModule {}
