import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { PokemonData, PokemonMovimiento } from '../../../clases/Pokemon';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent implements OnInit {

  nombre: string;
  listaMovimientos: PokemonMovimiento[];
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.nombre = this.route.snapshot.paramMap.get('pokemon');
    console.log("NOMBRE:",this.nombre);
    this.dataService.getPokemonDataMovimentos(this.nombre);
    this.listaMovimientos = this.dataService.listaMovimiento;
  }

}
