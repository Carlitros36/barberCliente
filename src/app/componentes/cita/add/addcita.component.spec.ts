import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcitaComponent } from './addcita.component';

describe('AddcitaComponent', () => {
  let component: AddcitaComponent;
  let fixture: ComponentFixture<AddcitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
