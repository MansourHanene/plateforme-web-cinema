import { Component, OnInit } from '@angular/core';
import{Event} from '../event';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';



@Component({
  selector: 'app-updatevent',
  templateUrl: './updatevent.component.html',
  styleUrls: ['./updatevent.component.css']
})
export class UpdateventComponent implements OnInit {

  srcResult;

  id: number;
  event: Event;

  constructor( private route: ActivatedRoute,private router: Router,
    private eventService: EventService) {
    
   }

  ngOnInit(): void {

    this.event=new Event();

      this.id = this.route.snapshot.params['id'];
      this.eventService.getEventById(this.id)
      .subscribe(data => {
        console.log(data)
        this.event = data;
      }, error => console.log(error));
  }

  updateEvent() {
    this.eventService.UpdateEvent(this.id,this.event)
      .subscribe(data => console.log(data), error => console.log(error));
    this.event = new Event();
    this.router.navigate(['/events']);
  }

  onSubmit() {
    this.updateEvent();
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
}
