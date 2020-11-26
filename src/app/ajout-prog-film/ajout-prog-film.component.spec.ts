import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutProgFilmComponent } from './ajout-prog-film.component';

describe('AjoutProgFilmComponent', () => {
  let component: AjoutProgFilmComponent;
  let fixture: ComponentFixture<AjoutProgFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutProgFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutProgFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
