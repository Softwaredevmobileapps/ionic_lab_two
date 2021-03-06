import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  GetMovieData():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?apikey=2ee2ed84&s=war');
  }

}
