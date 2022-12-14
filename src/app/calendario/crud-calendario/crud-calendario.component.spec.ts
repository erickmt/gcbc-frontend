import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCalendarioComponent } from './crud-calendario.component';

describe('CrudCalendarioComponent', () => {
  let component: CrudCalendarioComponent;
  let fixture: ComponentFixture<CrudCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCalendarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
