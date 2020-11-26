import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Film } from './film';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http : HttpClient) {   }

  url='http://localhost:9999/api'


  url1 = '//localhost:9999/api/filmbysearch'
  getFilmsBysearch(categorie: string,titre:string):Observable<any>{
   return this.http.get(`${this.url1}/${categorie}/${titre}`);
 }
  
   getAllFilms():Observable<any>{
    return this.http.get(this.url+'/films');


   }

   
   getFilmById(id : number): Observable<any>{
    return this.http.get(this.url+'/getfilm/'+id)


   }

  
   CreateFilm(body: Film){
    return this.http.post(this.url+'/film/save',body)


   }

   UpdateFilm(id,body: Film){
    return this.http.put(this.url+'/film/'+id,body)


   }

   deleteFilm(id:number): Observable<any>{
    return this.http.delete('//localhost:9999/api/film/delete/'+`${id}`, { responseType: 'text' });
  }
}
