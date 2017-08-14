import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
	selector: 'settings-page',
	templateUrl: 'settings.html'
})
export class SettingsPage {
    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController){
    }
}