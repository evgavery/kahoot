import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {PokemonDetailAbility} from '../../../../core/models/pokemons/pokemon-detail';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'kah-pokemon-detail-abilities',
  imports: [
    TitleCasePipe
  ],
  templateUrl: './pokemon-detail-abilities.component.html',
  styleUrl: './pokemon-detail-abilities.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonDetailAbilitiesComponent {
  pokemonAbilities: InputSignal<PokemonDetailAbility[]> = input.required<PokemonDetailAbility[]>();
}
