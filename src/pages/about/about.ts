import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { EditPerfilPage } from '../edit-perfil/edit-perfil';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  // perfilData: FirebaseObjectObservable<Perfil>

  constructor(  private afDatabase: AngularFireDatabase,
                private afAuth: AngularFireAuth,
                public navCtrl: NavController) {

  }

  editarPerfil(){
    this.navCtrl.push(EditPerfilPage)
  }

}
