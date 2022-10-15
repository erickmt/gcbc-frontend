import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoContratoComponent } from './novo-contrato.component';

describe('NovoContratoComponent', () => {
  let component: NovoContratoComponent;
  let fixture: ComponentFixture<NovoContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoContratoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
