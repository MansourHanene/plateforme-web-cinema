import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectateurSideComponent } from './spectateur-side.component';

describe('SpectateurSideComponent', () => {
  let component: SpectateurSideComponent;
  let fixture: ComponentFixture<SpectateurSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpectateurSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectateurSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
