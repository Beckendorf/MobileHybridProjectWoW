import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  public zone:NgZone;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.zone = new NgZone({});
    const config = {
      apiKey: "AIzaSyDKmmMOcvAnwdcGY4wIFX0hr4KxNewy1P4",
      authDomain: "myapp-ea250.firebaseapp.com",
      databaseURL: "https://myapp-ea250.firebaseio.com/",
      storageBucket: "gs://myapp-ea250.appspot.com/",
      messagingSenderId: "847136047094 "
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged( user => {
      this.zone.run( () => {
        if (!user) { 
          this.rootPage = 'LoginPage';
        } else {
          this.rootPage = HomePage;
        }
      });     
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

