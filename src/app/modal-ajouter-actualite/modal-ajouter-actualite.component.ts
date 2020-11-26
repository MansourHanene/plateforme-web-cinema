import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Allactualite } from '../allactualite';
import { Router } from '@angular/router';
import { ActualiteService } from '../actualite.service';

@Component({
  selector: 'app-modal-ajouter-actualite',
  templateUrl: './modal-ajouter-actualite.component.html',
  styleUrls: ['./modal-ajouter-actualite.component.css']
})

export class ModalAjouterActualiteComponent implements OnInit {

    actualite: Allactualite = new Allactualite();
    submitted = false;
    constructor(private actualiteService: ActualiteService,private router: Router) { }
    ngOnInit(): void {

      }



    newEmployee(): void {
      this.submitted = false;
      this.actualite = new Allactualite();
    }

    save() {
      this.actualiteService.createActualite(this.actualite)
        .subscribe(data => console.log(data), error => console.log(error));
      this.actualite = new Allactualite();
      this.gotoList();
    }

    onSubmit() {
      this.submitted = true;
      this.save();
    }

    gotoList() {
      location.reload();
    }


}
