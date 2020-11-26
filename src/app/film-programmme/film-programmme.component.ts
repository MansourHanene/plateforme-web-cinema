import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View} from '@syncfusion/ej2-angular-schedule';
import { AjoutProgFilmComponent } from '../ajout-prog-film/ajout-prog-film.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-film-programmme',
  templateUrl: './film-programmme.component.html',
  styleUrls: ['./film-programmme.component.css']
})
export class FilmProgrammmeComponent implements OnInit {

constructor(public dialog: MatDialog) {
}
public currentDate: Date = new Date(2020, 3, 27);
public eventData: EventSettingsModel = {
   dataSource: [
      {
         Id: 1,
         Subject: 'Joker',
         StartTime: new Date(2020, 3, 26, 7, 0),
         EndTime: new Date(2020, 3, 26, 11, 0),
         
     },
       {
           Id: 2,
           Subject: 'parasite',
           StartTime: new Date(2020, 3, 28, 5, 0),
         EndTime: new Date(2020, 3, 28, 8, 0)
       },
       {
           Id: 3,
           Subject: 'midnight sun',
           StartTime: new Date(2020, 3, 29, 1, 0),
         EndTime: new Date(2020, 3, 29, 3, 0)
       }]
}
ngOnInit() {
}
ajouter(){
    const dialogRef = this.dialog.open(AjoutProgFilmComponent, {
      width: '500px',
      height:'490px',
      
      data :{}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
}
}