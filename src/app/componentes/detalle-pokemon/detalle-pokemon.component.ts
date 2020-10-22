import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetalle, PokemonImages, PokemonAbility } from '../../clases/Pokemon';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.scss']
})
export class DetallePokemonComponent implements OnInit {
  @Input() nombre: string;
  @Input() listaHabilidades: PokemonAbility[];
  @Input() imagenes: PokemonImages;

  constructor() { }

  ngOnInit(): void {
  }

}
