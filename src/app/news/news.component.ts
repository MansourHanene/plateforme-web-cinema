import { Component, OnInit, Input,  } from '@angular/core';
import { Actualite } from '../actualite';
import Swal from 'sweetalert2';
import { ModalComponent } from '../modal/modal.component';
import { ModalAjouterActualiteComponent } from '../modal-ajouter-actualite/modal-ajouter-actualite.component';
import { Allactualite } from '../allactualite';
import { ActualiteService } from '../actualite.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']

})

export class NewsComponent implements OnInit {
  actu: Observable<Allactualite[]>;
  @Input() list;
actualites = Actualite
actualites_copy = Actualite
actualite: Allactualite
title = 'angulargooglemap';
  lat: number = 43.653908;
  lng: number = -79.384293;


constructor(private actualiteService:ActualiteService,private router:Router,public dialog: MatDialog) { }


  ngOnInit(): void {
     this.reloadData();

  }

  reloadData(){this.actu=this.actualiteService.getAllActualites();}

  ajouter(): void {
    console.log(this.list)
    const dialogRef = this.dialog.open(ModalAjouterActualiteComponent, {
      width: '500px',
      height:'490px',
      data :{}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
   }

  modifier(id: number){
    this.router.navigate(['admin/'+'update', id]);
  }

  remove(id: number) {
    this.actualiteService.deleteActualite(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


      search(value) {

        this.actualites = this.actualites_copy.filter((s) =>
          s.description_actualite.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
          s.titre_actualite.toLowerCase().indexOf(value.toLowerCase()) > -1

        )
        }

}
