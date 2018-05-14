import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  user = {} as User;

  constructor(  private afAuth: AngularFireAuth,
                public navCtrl: NavController,
                public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  async cadastro(user: User){
    try {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    this.navCtrl.push(TabsPage);
    console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }

}
