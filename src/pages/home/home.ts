import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    MovieProvider
  ]
})
export class HomePage {

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController,
    private movieProvider: MovieProvider) {}

  ionViewDidLoad(){
    this.movieProvider.getLatestMovies().subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.lista_filmes = objeto_retorno.results;
          console.log(objeto_retorno);
        }, error => {
          console.log(error);
        }

      )
  }

}
