import { createReducer, on } from '@ngrx/store';
import { fetchPokemonSuccess } from './app.actions';
import { initialAppState } from './app.state';

export const appReducer = createReducer(
  initialAppState,
  on(fetchPokemonSuccess, (_state, action) => {
    return {
      pokmeon: action.pokemon,
    };
  })
);
