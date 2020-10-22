
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Pokemon, PokemonData, PokemonDetalle, PokemonAbility, PokemonImages, Pokemones, PokemonMovimiento} from '../clases/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listaPokemones:Pokemon[];
  pokemones: Pokemones;
  pokemonData: PokemonData;
  listaHabilidades: PokemonAbility[];
  listaImagenes: PokemonImages;
  pokemonDetalle: PokemonDetalle;
  listaMovimiento: PokemonMovimiento[];

  constructor(
    private httpService: HttpService
  ) {
    this.listaPokemones = [];
    this.listaHabilidades = [];
    this.listaMovimiento = [];
    this.getPokemones();;
  }

  getPokemones(){
      this.httpService.get("https://pokeapi.co/api/v2/pokemon/").subscribe((pokemones) => {
      this.pokemones = pokemones;
      this.getListado();
      });
  }

  getListado(){
    this.pokemones.results.forEach(pokemon => {
      this.listaPokemones.push({
        name: pokemon.name,
        url: pokemon.url
      });
    });
    //console.log("listadoPokemons", this.listaPokemones);
  }

  /**
   * Carga la data de un pokemon, y habilidades
   * @param nombre
   */
  getPokemonDataDetalle(nombre: string){
    let url = "https://pokeapi.co/api/v2/pokemon/" + nombre;
    this.httpService.get(url).subscribe((pokemonData)=>{
      console.log("POKEMON", pokemonData);
      let imagenes: PokemonImages = {
        back_default: pokemonData.sprites.back_default,
        front_default: pokemonData.sprites.front_default,
        back_shiny: pokemonData.sprites.back_shiny,
        front_shiny: pokemonData.sprites.front_shiny
      }
      this.listaImagenes = imagenes;
      this.pokemonData = {
        habilidades: pokemonData.abilities,
        sprites: imagenes
      }
      pokemonData.abilities.forEach(habilidad =>{
        this.getHabilidad(habilidad.ability.url);
      });
    });
  }

  getPokemonDataMovimentos(nombre: string){
    let url = "https://pokeapi.co/api/v2/pokemon/" + nombre;
    this.httpService.get(url).subscribe((pokemonData)=>{
      let listaMoves = pokemonData.moves;
      listaMoves.forEach(movimiento =>{
        let move: PokemonMovimiento = {
          nombre: movimiento.move.name,
          level_learn_at: movimiento.version_group_details[0].level_learned_at,
          move_learn_method_name: movimiento.version_group_details[0].move_learn_method.name,
          version_group_name: movimiento.version_group_details[0].version_group.name,
        }
        this.listaMovimiento.push(move);
      });
      console.log("Lista de movimientos", this.listaMovimiento);
    });
  }

  getHabilidad(url){
    this.httpService.get(url).subscribe((habilidad)=>{
      let nombre = habilidad.names.find(nombre => nombre.language.name == "es");
      let habilidadNombre = nombre.name;
      let descripcion = habilidad.flavor_text_entries.find(texto => texto.language.name == "es");
      let habilidadDescripcion = descripcion.flavor_text;
      this.listaHabilidades.push({
        nombre: habilidadNombre,
        descripcion: habilidadDescripcion
      })
    });
  }

  getMovimiento(){
    this.httpService.get("https://pokeapi.co/api/v2/move/5/").subscribe(move =>{
      console.log("MOVIMIENTO:", move);
    });
  }

  getPokemonDetalle(nombre:string){

    this.pokemonData.habilidades.forEach(habilidad =>{
      this.getHabilidad(habilidad.ability.url);
    });
    console.log("nombre en detalle", nombre);
    this.pokemonDetalle = {
      nombre: nombre,
      listaHabilidades: this.listaHabilidades,
      listaImagenes: this.listaImagenes
    }
  }

  mostrar(){
    console.log("nada");
  }
}
