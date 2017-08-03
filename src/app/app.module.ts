import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { UsersPage } from '../pages/users/users';
import { ChatsPage } from '../pages/chats/chats';
import { AccountPage } from '../pages/account/account';
import { ChatViewPage } from '../pages/chat-view/chat-view';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { SlidesPage } from '../pages/slides/slides';

import { AuthProvider } from '../providers/auth-provider/auth-provider';
import { ChatsProvider } from '../providers/chats-provider/chats-provider';
import { UserProvider } from '../providers/user-provider/user-provider';
import { UtilProvider } from '../providers/utils';

export const firebaseConfig = {
  apiKey: "AIzaSyAaDRWKpmVN1MUibhJeH0e5anN9ypN8Z6E",
    authDomain: "retribe-c906e.firebaseapp.com",
    databaseURL: "https://retribe-c906e.firebaseio.com",
    projectId: "retribe-c906e",
    storageBucket: "retribe-c906e.appspot.com",
    messagingSenderId: "893412103274",
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

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
    ChatViewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
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
    ChatViewPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  AuthProvider, ChatsProvider, UserProvider, UtilProvider, Storage]
})
export class AppModule {}
