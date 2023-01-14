import { createAction, props } from '@ngrx/store';
import { GetPokemonByCriteria } from '../services/dtos/GetPokemonByCriteriaRequest.dto';
import { Pokemon } from './app.state';

export const fetchPokemon = createAction(
  '[Pokemon] Fetch All Pokemon',
  props<{ request: GetPokemonByCriteria }>()
);
export const fetchPokemonSuccess = createAction(
  '[Pokemon] Fetch All Pokemon Success',
  props<{ pokemon: Pokemon[] }>()
);
