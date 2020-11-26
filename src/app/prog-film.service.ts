import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgFilmService {

  constructor(private http: HttpClient) { }
  url = ''
  getAllActualites(){
    return this.http.get(this.url+'/AllProgFilms')
  }
  
  getActualiteById(id){
    return this.http.get(this.url+'/ProgFilm'+id)
  }
  /*createActualite(body: ){
    return this.http.post(this.url+'/ProgFilm',body)
  }*/
  /*updateActualite(body: ){
    return this.http.put(this.url+'/ProgFilms',body)
  }*/
  deleteActualite(id){
    return this.http.delete(this.url+'/Actualite'+id)
  }
}
