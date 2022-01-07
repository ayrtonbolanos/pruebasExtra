import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Si el numero insertado es 5, se debe obtener -5 en la formula.',()=>{
    let r=0;
    component.i=5;
    component.calcular();
    r=component.r;
    expect(r).toBe(-5);
  });
  it('Si el resultado es -5, se debe mostrar de resultado -5',()=>{
    let r=0;
    component.i=-5;
    component.calcular();
    r=component.r;
    expect(r).toBe(-5);
  });
  it('Al dar clic en el botón Calcular, se debe hacer el llamado a la función calcular',()=>{
    let r=0;
    component.i=1;
    component.calcular();
    r=component.r;
    expect(r).toBe(-1);
  });
});
