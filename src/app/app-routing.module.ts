import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { FilmsComponent } from './films/films.component';
import { SpectateurSideComponent } from './spectateur-side/spectateur-side.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { FilmProgrammmeComponent } from './film-programmme/film-programmme.component';
import { ModalComponent } from './modal/modal.component';
import { NotifiClientComponent } from './notifi-client/notifi-client.component';
import { AcceuilClientComponent } from './acceuil-client/acceuil-client.component';
import { PayementComponent } from './payement/payement.component';
import { HistoriqueComponent } from './historique/historique.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AddroomComponent } from './addroom/addroom.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import {DetailFilmComponent } from './detail-film/detail-film.component';

const routes: Routes = [
 
  

  {
    path:'client',
    component:SpectateurSideComponent,

    children:[
      {
        path:'notif',
        component:NotifiClientComponent
      },
      {
        path:'home',
        component:AcceuilClientComponent
      },
      
      {
        path:'payement',
        component:PayementComponent
      },
      {
        path:'historique',
        component:HistoriqueComponent
      },
      {
        path:'comments',
        component:CommentsComponent
      },
      {
        path:'programme',
        component:FilmProgrammmeComponent
      }
      ,
      { path: 'login', 
        component: LoginComponent 
    },
    { 
      path: 'chatroom/:roomname', 
      component: ChatroomComponent
   },
    { 
      path: 'roomlist', 
    component: RoomlistComponent 
  },
    { 
      path: 'addroom', 
    component: AddroomComponent 
  },
 
    
    ]
  },
  
  {
    path:'admin',
    component:AdminSideComponent,
  
  children:[
    {
      path:'detail',
      component: DetailFilmComponent
    },
    {
      path:'news',
      component:NewsComponent
    },
    {
      path:'update/:id',
      component:ModalComponent
    },
    {
      path:'events',
      component:EventsComponent
    },
    {
      path:'films',
      component:FilmsComponent
    },
    {
      path:'filmsprog',
      component:FilmProgrammmeComponent
    },
    { 
      path: 'login', 
    component: LoginComponent 
    },
    { 
      path: 'roomlist', 
    component: RoomlistComponent 
  },
    {
       path: 'addroom', 
    component: AddroomComponent
   },
    { 
      path: 'chatroom/:roomname', 
    component: ChatroomComponent
   },

  
]

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
