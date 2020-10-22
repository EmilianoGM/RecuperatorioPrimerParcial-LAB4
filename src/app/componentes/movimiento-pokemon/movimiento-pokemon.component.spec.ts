import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoPokemonComponent } from './movimiento-pokemon.component';

describe('MovimientoPokemonComponent', () => {
  let component: MovimientoPokemonComponent;
  let fixture: ComponentFixture<MovimientoPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
