import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { fetchAllPokemon, fetchAllPokemonSuccess } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}

  fetchAllPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchAllPokemon),
      mergeMap(() =>
        this.pokemonService.getAllPokemon().pipe(
          map((pokemon) => {
            return fetchAllPokemonSuccess({ pokemon });
          }),
          catchError((error) => {
            return of({ type: 'Fetch All Pokemon', error });
          })
        )
      )
    )
  );
}
