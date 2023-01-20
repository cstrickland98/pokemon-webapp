import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonComponent } from './pokemon.component';

@NgModule({
  declarations: [PokemonComponent],
  imports: [CommonModule],
  providers: [],
  exports: [PokemonComponent],
})
export class PokemonModule {}
