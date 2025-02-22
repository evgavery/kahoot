import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {PokemonDetailType} from '../../../../core/models/pokemons/pokemon-detail';
import {LowerCasePipe, NgOptimizedImage, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'kah-pokemon-detail-types',
  imports: [
    LowerCasePipe,
    NgOptimizedImage,
    TitleCasePipe
  ],
  templateUrl: './pokemon-detail-types.component.html',
  styleUrl: './pokemon-detail-types.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonDetailTypesComponent {
  pokemonTypes: InputSignal<PokemonDetailType[]> = input.required<PokemonDetailType[]>();
}
