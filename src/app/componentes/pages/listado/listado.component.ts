import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ListaPokemonesComponent } from '../../lista-pokemones/lista-pokemones.component';
import { Pokemon } from '../../../clases/Pokemon';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  listaPokemones: Pokemon[];

  constructor(
    private dataService: DataService
  ) {
    this.dataService.getPokemones();
    this.listaPokemones = this.dataService.listaPokemones;
  }

  ngOnInit(): void {
  }

}
