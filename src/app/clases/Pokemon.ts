export interface Pokemon{
  name: string,
  url: string
}

export interface PokemonData{
  habilidades: any[],
  sprites: PokemonImages
}

export interface PokemonDetalle{
  nombre: string
  listaHabilidades: PokemonAbility[],
  listaImagenes: PokemonImages
}

export interface PokemonAbility{
  nombre: string,
  descripcion: string
}

export interface PokemonImages{
  back_default: string,
  back_shiny: string,
  front_default: string,
  front_shiny: string
}

export interface Pokemones{
  count: number,
  next: string,
  previous: string,
  results: any[]
}

export interface PokemonMovimiento{
  nombre: string,
  level_learn_at: string,
  move_learn_method_name: string,
  version_group_name: string,
}
