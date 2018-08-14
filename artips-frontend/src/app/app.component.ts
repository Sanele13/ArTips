import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //url = 'http://localhost:4201/';

  constructor(
    public http:HttpClient
  ){}

  getAll(){
    this.http.get('/all').subscribe(data => {
      console.log(data);
    });
  }

  toTheStreets(){
    this.http.get('/streets').subscribe(data => {
      console.log(data);
    });
  }

  getMusic(){
    this.http.get('/music').subscribe(data => {
      console.log(data);
    });
  }

  getPoetry(){
    this.http.get('/poetry').subscribe(data => {
      console.log(data);
    });
  }

  getFilm(){
    this.http.get('/film').subscribe(data => {
      console.log(data);
    });
  }
}
