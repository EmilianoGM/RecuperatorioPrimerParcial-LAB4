import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../clases/Pokemon';

@Component({
  selector: 'app-lista-pokemones',
  templateUrl: './lista-pokemones.component.html',
  styleUrls: ['./lista-pokemones.component.scss']
})
export class ListaPokemonesComponent implements OnInit {
  @Input() listaPokemones: Pokemon[];

  page = 1;
  currentPage = 1;
  itemsPerPage = 5;
  pageSize= 5;
  flag:boolean = false;
  savePage: number;

  constructor() { }

  ngOnInit(): void {
  }

}
