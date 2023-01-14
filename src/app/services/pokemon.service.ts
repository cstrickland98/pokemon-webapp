import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../store/app.state';
import { GetPokemonByCriteria } from './dtos/GetPokemonByCriteriaRequest.dto';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private http: HttpClient) {}

  getAllPokemon(request: GetPokemonByCriteria): Observable<Pokemon[]> {
    return this.http
      .post<Pokemon[]>(
        'http://pokemon.gamersanonymous.ddns.net/pokemon/pokemonByCriteria',
        request
      )
      .pipe(
        map((pokemon) => {
          return pokemon;
        })
      );
  }
}
