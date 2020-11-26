import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAjouterActualiteComponent } from './modal-ajouter-actualite.component';

describe('ModalAjouterActualiteComponent', () => {
  let component: ModalAjouterActualiteComponent;
  let fixture: ComponentFixture<ModalAjouterActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAjouterActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAjouterActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
