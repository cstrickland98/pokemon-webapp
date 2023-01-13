import { createAction, props } from '@ngrx/store';
import { Pokemon } from './app.state';

export const fetchAllPokemon = createAction('[Pokemon] Fetch All Pokemon');
export const fetchAllPokemonSuccess = createAction(
  '[Pokemon] Fetch All Pokemon Success',
  props<{ pokemon: Pokemon[] }>()
);
