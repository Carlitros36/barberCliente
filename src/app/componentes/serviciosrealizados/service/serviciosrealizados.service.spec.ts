import { TestBed } from '@angular/core/testing';

import { ServiciosrealizadosService } from './serviciosrealizados.service';

describe('ServiciosrealizadosService', () => {
  let service: ServiciosrealizadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosrealizadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
