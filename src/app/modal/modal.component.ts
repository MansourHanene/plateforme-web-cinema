import { Component, OnInit, Input } from '@angular/core';
import { Allactualite } from '../allactualite';
import { ActivatedRoute, Router } from '@angular/router';
import { ActualiteService } from '../actualite.service';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  id: number;
  actualite: Allactualite;

  constructor(private route: ActivatedRoute,private router: Router,
    private ActService: ActualiteService) { }

  ngOnInit() {
    this.actualite = new Allactualite();

    this.id = this.route.snapshot.params['id'];

    this.ActService.getActualiteById(this.id)
      .subscribe(data => {
        console.log(data)
        this.actualite = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.ActService.updateActualite(this.id, this.actualite)
      .subscribe(data => console.log(data), error => console.log(error));
    this.actualite = new Allactualite();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/news']);
  }

}
