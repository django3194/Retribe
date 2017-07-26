import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';



@Component({
	selector: 'home-page',
	templateUrl: 'home.html'
})
export class HomePage {
    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController){

    }
    gotosettings(){
        this.navCtrl.push(SettingsPage);
    }

}