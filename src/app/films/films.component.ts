import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ModelFilmComponent } from '../model-film/model-film.component';
import { EditFilmComponent } from '../edit-film/edit-film.component';
import { FormGroup } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { Film } from '../film';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';
import{Filmss} from '../filmss';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {


  constructor( public dialog: MatDialog,private router:Router,private http:HttpClient,private apis : FilmService
    ) { }
    liste = Filmss;
    public films;
  objet:any ={}

  filmForm : FormGroup;
  film : Film;
  AfficherModelAjouterFilm():void {
    const dialogCongif = new MatDialogConfig();
    dialogCongif.disableClose = true;
    dialogCongif.autoFocus = true;
    dialogCongif.width = '40%';
    dialogCongif.height = '90%';
    this.dialog.open(ModelFilmComponent, dialogCongif);
  }
  AfficherModelModifierFilm()
  {
    const dialogCongif = new MatDialogConfig();
    dialogCongif.disableClose = true;
    dialogCongif.autoFocus = true;
    dialogCongif.width = '40%';
    dialogCongif.height = '90%';
    this.dialog.open(EditFilmComponent, dialogCongif);
  }
  reloadData(){
    
  
    this.apis.getAllFilms()
    .subscribe(
      (data:any[])=>{

        // en cas de succés
        this.films=data;
console.log(data)
      }
    )
  }

    
    ngOnInit(): void {

      this.reloadData();
 
  }



  
  remove(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      
        this.apis.deleteFilm(id)
          .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error));
      
    })
 
}

}
