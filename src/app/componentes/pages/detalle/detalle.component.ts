import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { PokemonDetalle, PokemonImages, PokemonAbility } from '../../../clases/Pokemon';
import { DetallePokemonComponent } from '../../detalle-pokemon/detalle-pokemon.component';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  nombre: string;
  listaHabilidades: PokemonAbility[];
  imagenes: PokemonImages;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.nombre = this.route.snapshot.paramMap.get('pokemon');
    console.log("NOMBRE:",this.nombre);
    this.dataService.getPokemonDataDetalle(this.nombre);
    this.listaHabilidades = this.dataService.listaHabilidades;
    this.imagenes = this.dataService.listaImagenes;
  }

  ngOnInit(): void {
  }

}
