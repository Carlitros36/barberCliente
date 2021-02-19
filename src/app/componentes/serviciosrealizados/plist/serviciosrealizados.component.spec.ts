import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosrealizadosComponent } from './serviciosrealizados.component';

describe('ServiciosrealizadosComponent', () => {
  let component: ServiciosrealizadosComponent;
  let fixture: ComponentFixture<ServiciosrealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosrealizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosrealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
