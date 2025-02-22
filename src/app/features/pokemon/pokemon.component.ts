import {ChangeDetectionStrategy, Component, inject, OnDestroy} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PokemonService} from '../../core/services/pokemon.service';

@Component({
  selector: 'kah-pokemon',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonComponent implements OnDestroy {

  private pokemonService = inject(PokemonService);

  ngOnDestroy() {
    this.pokemonService.clearPokemonList();
  }
}
