import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/authprovider/authprovider';
import { UserProvider } from '../../providers/userprovider/userprovider';
import { SlidesPage } from '../slides/slides';
import { App } from 'ionic-angular';




@Component({
    templateUrl: 'account.html'
})
export class AccountPage {
    //app: any;
    rootNav;
    user = {};
    constructor(public nav: NavController, 
                public auth: AuthProvider, 
                public userProvider: UserProvider,
                public local:Storage,
                public app:App) {
        this.userProvider.getUser()
        .then(userObservable => {
            userObservable.subscribe(user => {
                this.user = user;
            });
        });
    }
    
    //save user info
    updatePicture() {
        this.userProvider.updatePicture();
    };

    logout() {

        this.local.remove('uid');
        this.auth.logout();
        this.app.getRootNav().setRoot(SlidesPage);
        //this.navCtrl.parent.parent.setRoot(LoginPage);
        
            //this.nav.setRoot(LoginPage);





    }
}