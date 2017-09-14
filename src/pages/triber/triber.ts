import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController , ModalController } from 'ionic-angular';



@Component({
	selector: 'triber-page',
	templateUrl: 'triber.html'
})
export class TriberPage {
	    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public modalCtrl: ModalController){}




}