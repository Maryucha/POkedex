import { TypePokemon } from "./TypePokemon";


export interface Pokemon {
  image:  string,
  number: number;
  name: string;
  types: TypePokemon[];
}
