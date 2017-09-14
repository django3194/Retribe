import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController , ModalController } from 'ionic-angular';
import {AddtribesPage} from '../addtribes/addtribes';
import{TribeinfoPage} from '../tribeinfo/tribeinfo';

@Component({
	selector: 'tribes-page',
	templateUrl: 'tribes.html'
})
export class TribesPage {
	    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public modalCtrl: ModalController){}



addtribes(){

let Modal = this.modalCtrl.create(AddtribesPage);
Modal.present();




}
gototribeinfo(){

	let m = this.modalCtrl.create(TribeinfoPage);
	m.present();
}


}