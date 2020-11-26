import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-side',
  templateUrl: './admin-side.component.html',
  styleUrls: ['./admin-side.component.css']
})
export class AdminSideComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  

}
