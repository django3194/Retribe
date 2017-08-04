import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';
import { SignUpPage } from '../signup/signup';

import { Validators, FormGroup, FormControl } from '@angular/forms';
import { validateEmail } from '../../validators/email';
import { AuthProvider } from '../../providers/authprovider/authprovider';
import { UserProvider } from '../../providers/userprovider/userprovider';
import { UtilProvider } from '../../providers/utils';

@Component({
    templateUrl: 'login.html'
})
export class LoginPage {
    loginForm: any;
    constructor(public nav: NavController,
        public auth: AuthProvider,
        public userProvider: UserProvider,
        public util: UtilProvider,
        public storage: Storage,
        public app: App) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl("", [Validators.required, validateEmail]),
            password: new FormControl("", Validators.required)
        });
    }

    // login using email and password.
    signin() {
        this.auth.signin(this.loginForm.value)
            .then((data) => {
                console.log(data);
                this.storage.set('uid', data.uid);
                this.nav.setRoot(TabsPage);
            }, (error) => {
                let alert = this.util.doAlert("Error", error.message ? error.message : error, "Ok");
                alert.present();
            });
    };

    //Login request from facebook
    signinWithFB() {
        this.auth.loginWithFacebook().then(facebook => {
            this.nav.setRoot(TabsPage);
        })
    }

    // Route to the signup page.
    createAccount() {
        this.nav.push(SignUpPage);

    }
}