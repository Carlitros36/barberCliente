import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioComponent } from './tipousuario.component';

describe('TipousuarioComponent', () => {
  let component: TipousuarioComponent;
  let fixture: ComponentFixture<TipousuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
