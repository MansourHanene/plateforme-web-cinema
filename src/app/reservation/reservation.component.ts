import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
  mail: string ;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Avatar', weight: 2, symbol: 'Soumaya ', mail: 'Soumaya@gmail.com'},
  {  name: 'friends', weight: 4, symbol: 'Hanen',  mail: 'Hanen@gmail.com'},
  {name: 'as above', weight: 6, symbol: 'Rahma',  mail:'Rahma@gmail.com'},
  {name: 'Avatar', weight: 2, symbol: 'Marwa',  mail: 'Marwa@gmail.com'},
  
];

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  displayedColumns: string[] = [ 'name', 'weight', 'symbol','mail'];
  dataSource = ELEMENT_DATA;
  
  
  
 
}