import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddeventComponent } from '../addevent/addevent.component';
import{Eventss} from '../liste_events';
import{Event} from '../event';
import { UpdateventComponent } from '../updatevent/updatevent.component';
import { FormGroup } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { EventService } from '../event.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(public dialog: MatDialog,private router:Router,private http:HttpClient,private apis : EventService) { }

     
    liste = Eventss;
    public events;
  objet:any ={}

  eventForm : FormGroup;
  event : Event;

 
  reloadData(){
    
  
    this.apis.getAllEvents()
    .subscribe(
      (data:any[])=>{

        // en cas de succés
        this.events=data;
console.log(data)
      }
    )
  }

    
    ngOnInit(): void {

      this.reloadData();
 
  }




  remove(id:number) {

    Swal.fire({
      title: "Are you sure ?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: "keep it",
      confirmButtonText: "Delete it"

    }).then((action) => {

      if (action.value) {

        this.apis.RemoveEvent(id).
        subscribe((data)=>{
          Swal.fire("deleted","","success")
          //pour charger la base
          this.ngOnInit()

        },error=>console.log(error))

       
      }}
      )
    
    }


   

    
    openDialog(): void {
      
      console.log(this.events)

      const dialogRef = this.dialog.open(AddeventComponent, {
        width: '600px',
        height:'600px',
        
        data :{}
      
       
      });
      
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       
      });
    }
  

    

   

    openDialog2(id: number){
     
     // this.router.navigate(['update', id]); 

      const dialogRef = this.dialog.open(UpdateventComponent, {
        width: '600px',
        height:'600px',
        data :{titre:"ccc",name:"df"}
       
      });
      
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       
      });

    }
  }
  
  export interface DialogData {
    titre: string;
    name: string;
  }