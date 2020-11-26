import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Film } from '../film';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';


@Component({
  selector: 'app-model-film',
  templateUrl: './model-film.component.html',
  styleUrls: ['./model-film.component.css']
})
export class ModelFilmComponent implements OnInit {

  
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  ///@Output() save: EventEmitter<any> = new EventEmitter();
  film: Film = new Film();
  submitted = false;
  constructor(public dialogRef: MatDialogRef<ModelFilmComponent> , 
    private filmService: FilmService,private router: Router) { }
 

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }


  srcResult=""
  
    onFileSelected() {
      const inputNode: any = document.querySelector('#file');
    
      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();
    
        reader.onload = (e: any) => {
          this.srcResult = e.target.result;
        };
    
        reader.readAsArrayBuffer(inputNode.files[0]);
      }
    }
  ajouter(){
  
  
        this.filmService.CreateFilm(this.film)
        .subscribe(data => console.log(data),error=> console.log(error));
        this.film=new Film();
        location.reload();
  }
  
  onSubmit() {
    this.submitted = true;
    this.ajouter();
  }
}
