import { Component, OnInit, Inject } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Observable } from 'rxjs';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { Allactualite } from '../Allactualite';
import { ActualiteService } from '../actualite.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-acceuil-client',
  templateUrl: './acceuil-client.component.html',
  styleUrls: ['./acceuil-client.component.css']
})
export class AcceuilClientComponent implements OnInit {
  film: Observable<Film[]>;
  actu: Observable<Allactualite[]>;
  constructor(private FilmService:FilmService,private ActualiteService:ActualiteService,@Inject(LOCAL_STORAGE) private storage: StorageService) { }
  title = 'angulargooglemap';
  lat: number = 43.653908;
  lng: number = -79.384293;
  ngOnInit(): void {
    this.film=this.FilmService.getFilmsBysearch(this.storage.get('SEARCH_KEY'),this.storage.get('SEARCH_KEY'));
    this.actu=this.ActualiteService.getActualiteBysearch(this.storage.get('SEARCH_KEY'));

  }


}
