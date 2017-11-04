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

var BreakException = {};

			this.itemRef.on('value', itemSnapshot => { 
			this.items = [];
			itemSnapshot.forEach( itemSnap => {
				var string =  itemSnap.val().nom + ' (' + itemSnap.val().region +  ' - ' + itemSnap.val().server + ') ' + itemSnap.val().classe + ' ' + itemSnap.val().spe + ' - Level : ' + itemSnap.val().level;
				this.items.push(string);
var i = 0;
try {
				itemSnap.forEach( snapo => {

				var string2 = ' ----- ' + snapo.val();
					this.items.push(string2);
					i++;
					if (i == 15)  throw BreakException;
					
				});

		} catch (e) {
  			if (e !== BreakException) throw e;
		}
		
			
			return false;
			}); 

		});
		}

	info()
	{
		
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
