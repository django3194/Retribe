import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFire } from 'angularfire2';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthProvider } from '../providers/auth-provider/auth-provider';
import { SlidesPage } from '../pages/slides/slides';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import { NavController, App} from "ionic-angular/index";





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SlidesPage;
      

    

    //private navCtrl: NavController;

  constructor(platform: Platform, public af: AngularFire, public authProvider:AuthProvider , public loadingCtrl: LoadingController, public storage: Storage) {
    
            //this.rootPage = SlidesPage;

    platform.ready().then(() => {
  
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.intialize();
    });
  }

  intialize() { 
    
    this.af.auth.subscribe(auth => {
      
       if(auth) {
         
          this.rootPage.setRoot = TabsPage;

          
        } else {
         this.rootPage.setRoot = LoginPage;
        
    }
    });
  }
}
