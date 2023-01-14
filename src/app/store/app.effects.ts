import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { fetchPokemon, fetchPokemonSuccess } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}

  fetchAllPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPokemon),
      mergeMap((action) =>
        this.pokemonService.getAllPokemon(action.request).pipe(
          map((pokemon) => {
            return fetchPokemonSuccess({ pokemon });
          }),
          catchError((error) => {
            return of({ type: 'Fetch All Pokemon', error });
          })
        )
      )
    )
  );
}
