import { Perfil } from '../../models/perfil';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { EditPerfilPage } from '../edit-perfil/edit-perfil';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  perfilData: AngularFireObject<Perfil>

  constructor(  private afDatabase: AngularFireDatabase,
                private afAuth: AngularFireAuth,
                public navCtrl: NavController,
                private toast: ToastController){}
                // private obj: FirebaseObjectObservable) {}

  editarPerfil(){
    this.navCtrl.push('EditPerfilPage')
  }

  ionViewWillLoad(){
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Bem vindo a meu portifolio, ${data.email}`,
          duration: 3000
        }).present();
        this.perfilData = this.afDatabase.object(`perfil/${data.uid}`)
      }
      else {
        this.toast.create({
          message: `Não foi possível identificar seu cadastro.`,
          duration: 3000
        }).present();
      }
    })
  }
}
