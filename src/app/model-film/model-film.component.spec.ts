import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFilmComponent } from './model-film.component';

describe('ModelFilmComponent', () => {
  let component: ModelFilmComponent;
  let fixture: ComponentFixture<ModelFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
