import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Event } from '../event';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  constructor(private eventservice: EventService,private router: Router) { }
  eventForm : FormGroup;
  event : Event = new Event();

  submitted=false ;

  srcResult=""

  ngOnInit(): void {
  
  }



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


      this.eventservice.CreateEvent(this.event)
      .subscribe(data => console.log(data),error=> console.log(error));
      this.event=new Event();
      location.reload();
}

onSubmit() {
  this.submitted = true;
  this.ajouter();
}
}