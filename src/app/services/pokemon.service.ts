import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../store/app.state';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>('http://pokemon.gamersanonymous.ddns.net/pokemon')
      .pipe(
        map((pokemon) => {
          return pokemon;
        })
      );
  }
}
