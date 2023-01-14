import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GetPokemonByCriteria } from './services/dtos/GetPokemonByCriteriaRequest.dto';
import { fetchPokemon } from './store/app.actions';
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
  filterForm = new FormGroup({
    id: new FormControl(1),
    name: new FormControl('Bulbasaur'),
    type1: new FormControl('Grass'),
    type2: new FormControl('Poison'),
    generation: new FormControl('1'),
    logicalOperator: new FormControl('And'),
  });

  constructor(
    private store: Store<AppState>,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fetchPokemon({ request: {} }));
    this.store.select(selectPokemon).subscribe((pokemon) => {
      this.pokemon = pokemon;
      this.changeDetection.detectChanges();
    });
  }

  onFilterSubmit() {
    this.store.dispatch(
      fetchPokemon({ request: this.filterForm.value as GetPokemonByCriteria })
    );
  }

  clear() {
    console.log(this.filterForm.value);
    this.filterForm.setValue({
      id: null,
      name: null,
      type1: null,
      type2: null,
      generation: null,
      logicalOperator: 'And',
    });

    console.log(this.filterForm.value);
  }
}
