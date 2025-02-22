import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {DestroySubDirective} from '../../../core/directives/destroy-sub.directive';
import {PokemonDetail} from '../../../core/models/pokemons/pokemon-detail';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from '../../../core/services/pokemon.service';
import {takeUntil} from 'rxjs';
import {PokemonDetailImgComponent} from './pokemon-detail-img/pokemon-detail-img.component';
import {PokemonDetailAbilitiesComponent} from './pokemon-detail-abilities/pokemon-detail-abilities.component';
import {PokemonDetailTypesComponent} from './pokemon-detail-types/pokemon-detail-types.component';
import {PokemonDetailParametersComponent} from './pokemon-detail-parameters/pokemon-detail-parameters.component';
import {TitleCasePipe} from '@angular/common';
import {LoaderComponent} from '../../../shared/loader/loader.component';
import {ButtonDirective} from '../../../core/directives/ui/button.directive';

@Component({
  selector: 'kah-pokemon-detail',
  imports: [
    PokemonDetailImgComponent,
    PokemonDetailAbilitiesComponent,
    PokemonDetailTypesComponent,
    PokemonDetailParametersComponent,
    TitleCasePipe,
    LoaderComponent,
    ButtonDirective
  ],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent extends DestroySubDirective implements OnInit {
  pokemonDetail: WritableSignal<PokemonDetail | null> = signal<PokemonDetail | null>(null);
  error = signal(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const id = params.get('id');
      if (!id) {
        this.error.set(true);
        return;
      }
      this.getDetails(id);
    })
  }

  getDetails(identifier: string | number) {
    this.pokemonService.getPokemonDetails(identifier)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (details: PokemonDetail) => this.pokemonDetail.set(details),
        error: () => {
          this.error.set(true);
        }
      });
  }

  goBack(): void {
    const page = this.route.snapshot.queryParams['page'] || 1;
    this.router.navigate(['/pokemons'], { queryParams: { page } });
  }
}
