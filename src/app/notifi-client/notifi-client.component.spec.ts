import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiClientComponent } from './notifi-client.component';

describe('NotifiClientComponent', () => {
  let component: NotifiClientComponent;
  let fixture: ComponentFixture<NotifiClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifiClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifiClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
