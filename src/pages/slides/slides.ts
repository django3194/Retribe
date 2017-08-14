import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignUpPage } from '../signup/signup';

@Component({
  selector: 'slides-home',
  templateUrl: 'slides.html'
})
export class SlidesPage {
    //SlidesPage:any;

 @ViewChild(Slides) slides:Slides;
    SkipMsg: string;

  constructor(public navCtrl: NavController) {

  }
gotologin(){
    this.navCtrl.setRoot(LoginPage);
    
}

CreateAccount(){
    this.navCtrl.setRoot(SignUpPage);
}

/*slideChanged() {
if(this.slides.isEnd()){
    this.SkipMsg = "That's Awesome!";
}
else{
    this.SkipMsg = "Go!";
}
}*/

/*next(){
this.slides.slideNext();
}*/

slider = [
{
    title:"Re-build your life",
    content:"Not happy with your life? Re-tribe connects you with people who understand",
    image:"assets/images/logo-grunge-large-e1489501443277.png"
},
{
    title:"Acceptance",
    content:"The ability to understand that you are living in a negative way as an individual & Realizing your life is becoming harder to manage",
    image:"assets/images/acceptance.png"
},
{
    title:"Reaching Out",
    content:"Admitting that you can not do this yourself & Form connections with others",
    image:"assets/images/reaching-out.png"
},
{
    title:"Power of the Group",
    content:"Connection with like minded people, Support, Reducing isolation/loneliness & Reduces anxiety",
    image:"assets/images/power.png"
},
{
    title:"Nutrition & Exercise",
    content:"Improves well being & Self esteem",
    image:"assets/images/nutrition.png"
},
{
    title:"Mindfullness",
    content:"Improves spiritual well being, Improves emotional well being and awareness, Contact with a higher power & Removes self-centeredness",
    image:"assets/images/mindfulnessfinal.png"
},
{
    title:"Helping Others",
    content:"Being able to help others in the groups though sharing your experiences & Feeling of comradery",
    image:"assets/images/helping.png"
}
];

}
