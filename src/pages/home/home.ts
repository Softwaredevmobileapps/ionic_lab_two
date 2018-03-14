import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieProvider} from '../../providers/movie/movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies:any[]=[];
  constructor(public navCtrl: NavController, private mp:MovieProvider) {

  }
  ionViewDidLoad() {
    // console.log("I'm alive!");
    this.mp.GetMovieData().subscribe(data =>
    {
        this.movies = data.Search;
    })

  }

}
