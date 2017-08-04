import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EqualTextValidator } from "angular2-text-equality-validator";

import { TabsPage } from '../tabs/tabs';
 import { LoginPage } from '../login/login' ;
 import { ConfirmPassword } from '../../validators/confirmPassword'
 import { validateEmail } from '../../validators/email';  

import { Validators, FormBuilder,FormGroup, FormControl } from '@angular/forms';

import { UserProvider } from '../../providers/userprovider/userprovider';
import { AuthProvider } from '../../providers/authprovider/authprovider';
import { UtilProvider } from '../../providers/utils';

@Component({
	templateUrl: 'signup.html'
})

export class SignUpPage{
    signUpForm:FormGroup;
    
    constructor(public nav:NavController,
      public auth: AuthProvider, 
      public userProvider: UserProvider,
      public util: UtilProvider,
      public fb: FormBuilder) {

          this.signUpForm = fb.group({
            email:['',Validators.compose([Validators.required, validateEmail])],
            password: ['',Validators.compose([ Validators.required,Validators.minLength(5)])],
            confirmPassword: ['',Validators.required],
            displayname: ['',Validators.required]
        }, {
            validator: ConfirmPassword.MatchPassword
        })
          

    }

   // Create an account for new user
    createAccount() {
        
        let credentials = this.signUpForm.value;
        console.log(credentials);
        this.auth.createAccount(credentials)
        .then((data) => {
      // do nothing
        }, (error) => {
            let alert = this.util.doAlert("Error",error.message?error.message:error,"Ok");
            alert.present();
        });
    }

    
}    