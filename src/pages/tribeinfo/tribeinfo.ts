import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController , ModalController } from 'ionic-angular';

@Component({
	selector: 'tribeinfo-page',
	templateUrl: 'tribeinfo.html'
})
export class TribeinfoPage {
	    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public modalCtrl: ModalController){}

dismiss(){
       this.viewCtrl.dismiss();
        }  

}