import { createReducer, on } from '@ngrx/store';
import { fetchAllPokemonSuccess } from './app.actions';
import { initialAppState } from './app.state';

export const appReducer = createReducer(
  initialAppState,
  on(fetchAllPokemonSuccess, (_state, action) => {
    return {
      pokmeon: action.pokemon,
    };
  })
);
