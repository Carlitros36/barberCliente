import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinventarioComponent } from './addinventario.component';

describe('AddinventarioComponent', () => {
  let component: AddinventarioComponent;
  let fixture: ComponentFixture<AddinventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
