import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Pokemon } from 'src/app/store/app.state';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent {
  @Input() pokemon: Pokemon;
}
