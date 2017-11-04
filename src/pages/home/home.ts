import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// We import the authentication provider to test the log-out function.
import { AuthProvider } from '../../providers/auth/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	public items: Array<any> = [];
	public itemRef: firebase.database.Reference = firebase.database().ref('/items/');
	
	constructor(public navCtrl: NavController, public authProvider: AuthProvider) { 
	}
		

	ionViewDidLoad() {
		this.itemRef.on('value', itemSnapshot => {
			this.items = [];
			itemSnapshot.forEach( itemSnap => {
				this.items.push(itemSnap.val());
				return false;
			});
		});
	}

	addItem(name: string): void {
		var arrayItem={};
		arrayItem["value"] = name;
		this.itemRef.update("items", arrayItem);
	}

	
	removeItem(item: string): void {
		this.itemRef.value.remove(item);
	}
  
	logMeOut() {
		this.authProvider.logoutUser().then( () => {
		this.navCtrl.setRoot('LoginPage');
		});
	}

}
