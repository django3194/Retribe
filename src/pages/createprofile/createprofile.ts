import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';
import { SignUpPage } from '../signup/signup';

import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UtilProvider } from '../../providers/utils';

@Component({
    templateUrl: 'createprofile.html'
})
export class Createprofile {
    createprofileForm: any;
    constructor() {
    }

    ngOnInit() {
        this.createprofileForm = new FormGroup({
        });
    }

    // login using email and password.
    signin() {
        
    };

}