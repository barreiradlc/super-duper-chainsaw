import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Perfil } from '../../models/perfil';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the EditPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-perfil',
  templateUrl: 'edit-perfil.html',
})
export class EditPerfilPage {

  perfil = {} as Perfil;

  constructor(  private afAuth: AngularFireAuth,
                private afDatabase: AngularFireDatabase,
                public navCtrl: NavController,
                public navParams: NavParams) {
  }

  editarPerfil(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`perfil/${auth.uid}`).set(this.perfil)
        .then(() => this.navCtrl.push(TabsPage));
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPerfilPage');
  }

}
