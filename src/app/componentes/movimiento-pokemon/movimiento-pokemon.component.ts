import { Component, OnInit, Input } from '@angular/core';
import { PokemonData, PokemonMovimiento } from '../../clases/Pokemon';

@Component({
  selector: 'app-movimiento-pokemon',
  templateUrl: './movimiento-pokemon.component.html',
  styleUrls: ['./movimiento-pokemon.component.scss']
})
export class MovimientoPokemonComponent implements OnInit {
  @Input() listaMovimientos: PokemonMovimiento[]

  constructor() { }

  ngOnInit(): void {
  }

}
