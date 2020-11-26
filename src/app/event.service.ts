import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HttpClient) {   }

  url='http://localhost:9999/api'


 
  
   getAllEvents():Observable<any>{
    return this.http.get(this.url+'/events');


   }

   
   getEventById(id : number): Observable<any>{
    return this.http.get(this.url+'/getevent/'+id)


   }

  
   CreateEvent(body: Event){
    return this.http.post(this.url+'/event/save',body)


   }

   UpdateEvent(id,body: Event){
    return this.http.put(this.url+'/event/'+id,body)


   }



   RemoveEvent(id : number): Observable<any>{
    return this.http.delete(this.url+'/event/delete/'+`${id}`, { responseType: 'text' });



  }

 
  
}

