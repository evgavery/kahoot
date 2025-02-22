import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {PokemonDetail} from '../../../../core/models/pokemons/pokemon-detail';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'kah-pokemon-detail-img',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './pokemon-detail-img.component.html',
  styleUrl: './pokemon-detail-img.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonDetailImgComponent {
  pokemon: InputSignal<PokemonDetail> = input.required<PokemonDetail>();
}
