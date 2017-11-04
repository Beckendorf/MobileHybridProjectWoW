import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// We import the authentication provider to test the log-out function.
import { AuthProvider } from '../../providers/auth/auth';
import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	public items: Array<any> = [];
	public infos: Array<any> = [];
	public infosbis: Array<any> = [];
	public itemRef: firebase.database.Reference = firebase.database().ref('personnage/');
	
	constructor(public navCtrl: NavController, public authProvider: AuthProvider) { 
	}
		


		ionViewDidLoad()
		{

			this.itemRef.on('value', itemSnapshot => { 
			this.items = [];
			itemSnapshot.forEach( itemSnap => {
				var string =  itemSnap.val().nom + ' (' + itemSnap.val().region +  ' - ' + itemSnap.val().server + ') ' + itemSnap.val().classe + ' ' + itemSnap.val().spe + ' - Level : ' + itemSnap.val().level;
				this.items.push(string);
				
			this.items.push(' ---- ' + itemSnap.val()._head);
			this.items.push(' ---- ' + itemSnap.val()._neck);
			this.items.push(' ---- ' + itemSnap.val()._shoulder);
			this.items.push(' ---- ' + itemSnap.val()._back);
			this.items.push(' ---- ' + itemSnap.val()._chest);
			this.items.push(' ---- ' + itemSnap.val()._wrists);
			this.items.push(' ---- ' + itemSnap.val()._hands);
			this.items.push(' ---- ' + itemSnap.val()._waist);
			this.items.push(' ---- ' + itemSnap.val()._legs);
			this.items.push(' ---- ' + itemSnap.val()._feet);
			this.items.push(' ---- ' + itemSnap.val()._ring1);
			this.items.push(' ---- ' + itemSnap.val()._ring2);
			this.items.push(' ---- ' + itemSnap.val()._trinket1);
			this.items.push(' ---- ' + itemSnap.val()._trinket2);
			this.items.push(' ---- ' + itemSnap.val()._mainhand);
			this.items.push(' ---- ' + itemSnap.val()._offhand);
			return false;
			}); 
		});
}


	addItem(server: string, name : string): void {
	var nUp = 'eu-' + server + '-' + name;
	firebase.database().ref('users/' + nUp).set({nom:name,
	region:"eu",
	server:server});
	}

	
	removeItem(server: string, name : string): void {
	var nUp = 'eu-' + server + '-' + name;
	//firebase.database().ref('users/').remove(nUp);
	}
  
	logMeOut() {
		this.authProvider.logoutUser().then( () => {
		this.navCtrl.setRoot('LoginPage');
		});
	}

}
