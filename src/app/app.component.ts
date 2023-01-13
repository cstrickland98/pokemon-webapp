import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchAllPokemon } from './store/app.actions';
import { selectPokemon } from './store/app.selectors';
import { AppState, Pokemon } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'pokemon-webapp';
  pokemon: Pokemon[];
  constructor(
    private store: Store<AppState>,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fetchAllPokemon());
    this.store.select(selectPokemon).subscribe((pokemon) => {
      this.pokemon = pokemon;
      this.changeDetection.detectChanges();
    });
  }
}
