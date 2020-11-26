import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDkNMQJVTQXgC-KAdXZYZte6QJugHIloSQ',
  databaseURL: 'https://cinema-3f094.firebaseio.com'
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecinema';

  constructor() {
    firebase.initializeApp(config);
  }

}
