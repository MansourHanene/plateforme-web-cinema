import { Component, OnInit ,Inject, Injectable} from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
@Component({
  selector: 'app-spectateur-side',
  templateUrl: './spectateur-side.component.html',
  styleUrls: ['./spectateur-side.component.css']
})
export class SpectateurSideComponent implements OnInit {
  public model: any = {} ;
  constructor(private router: Router,@Inject(LOCAL_STORAGE) private storage: StorageService) {

  }
  onSubmit(form: NgForm) {
    for (let n = 0; n < 10; n++) {
      localStorage.setItem('test', '11');
  }
    console.log(form.value.search);
    console.log(this.model.search);
    this.storage.set('SEARCH_KEY', this.model.search);

    this.router.navigate(['/client/home']);
  }
  ngOnInit(): void {


  }

}
