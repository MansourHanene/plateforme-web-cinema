import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Allactualite } from './allactualite';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private http: HttpClient) { }

  url = '//localhost:9999/api/actualites'
  url3 = '//localhost:9999/api/actualitebysearch/'
   getActualiteBysearch(desc:string):Observable<any>{
    return this.http.get(`${this.url3}/${desc}`);
  }
  getAllActualites():Observable<any>{
    return this.http.get(this.url);
  }

  getActualiteById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  createActualite(body: Allactualite){
    return this.http.post('//localhost:9999/api'+'/ajouteractualite',body)
  }
  updateActualite(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, value);
  }
  deleteActualite(id:number): Observable<any>{
    return this.http.delete('//localhost:9999/api/delete/'+`${id}`, { responseType: 'text' });
  }
}
