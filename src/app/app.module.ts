import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';

import { NewsComponent } from './news/news.component';
import { AddeventComponent } from './addevent/addevent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';


import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateventComponent } from './updatevent/updatevent.component';
import { ModalComponent } from './modal/modal.component';
import { ModalAjouterActualiteComponent } from './modal-ajouter-actualite/modal-ajouter-actualite.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { FilmsComponent } from './films/films.component';
import { ModelFilmComponent } from './model-film/model-film.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { SpectateurSideComponent } from './spectateur-side/spectateur-side.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService, ResizeService, DragAndDropService } from '@syncfusion/ej2-angular-schedule';
import { FilmProgrammmeComponent } from './film-programmme/film-programmme.component';
import { AjoutProgFilmComponent } from './ajout-prog-film/ajout-prog-film.component';
import { AgmCoreModule } from '@agm/core';
import { NotifiClientComponent } from './notifi-client/notifi-client.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { AcceuilClientComponent } from './acceuil-client/acceuil-client.component';
import { PayementComponent } from './payement/payement.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CommentsComponent } from './comments/comments.component';



import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { AddroomComponent } from './addroom/addroom.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { RoomlistComponent } from './roomlist/roomlist.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DatePipe } from '@angular/common';
import { StorageServiceModule } from  'ngx-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    NewsComponent,
    ModalComponent,
    ModalAjouterActualiteComponent,
    AddeventComponent,
    UpdateventComponent,
    FilmProgrammmeComponent,
    DetailFilmComponent,
    FilmsComponent,
    ModelFilmComponent,
    EditFilmComponent,
    SpectateurSideComponent,
    AdminSideComponent,
    AjoutProgFilmComponent,
    NotifiClientComponent,
    WeatherWidgetComponent,
    AcceuilClientComponent,
    PayementComponent,
    HistoriqueComponent,
    ReservationComponent,
    CommentsComponent,
    LoginComponent,
    AddroomComponent,
    ChatroomComponent,
    RoomlistComponent,
  ],
 
  imports: [
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ScheduleModule,
    MatChipsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    StorageServiceModule,
    MatSnackBarModule,
    MatSidenavModule,
   
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
    })
  ],
 
  providers: [MatDatepickerModule,
    MatChipsModule,MatDatepickerModule, 
    MatNativeDateModule ,AgendaService, DayService, WeekService, WorkWeekService,
     MonthService, DragAndDropService, 
     ResizeService,
     DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[AddeventComponent,
    ModelFilmComponent,
    EditFilmComponent]
})
export class AppModule { }
