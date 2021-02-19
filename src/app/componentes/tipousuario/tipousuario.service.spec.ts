import { TestBed } from '@angular/core/testing';

import { TipousuarioService } from './tipousuario.service';

describe('TipousuarioService', () => {
  let service: TipousuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipousuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
