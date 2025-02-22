export interface PokemonDetail {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: PokemonDetailType[];
  abilities: PokemonDetailAbility[];
  // Model has more properties only used ones declared
}

export interface PokemonDetailAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonDetailType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
