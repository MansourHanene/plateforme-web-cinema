import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditFilmComponent>) { }
 

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
