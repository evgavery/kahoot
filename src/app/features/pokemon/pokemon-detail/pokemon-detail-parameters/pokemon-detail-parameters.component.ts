import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {PokemonDetail} from '../../../../core/models/pokemons/pokemon-detail';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'kah-pokemon-detail-parameters',
  imports: [
    TitleCasePipe
  ],
  templateUrl: './pokemon-detail-parameters.component.html',
  styleUrl: './pokemon-detail-parameters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PokemonDetailParametersComponent {
  pokemon: InputSignal<PokemonDetail> = input.required<PokemonDetail>();
}
