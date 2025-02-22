import {ChangeDetectionStrategy, Component, computed, inject, OnInit, Signal, signal} from '@angular/core';
import {PokemonService} from '../../../core/services/pokemon.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DestroySubDirective} from '../../../core/directives/destroy-sub.directive';
import {takeUntil} from 'rxjs';
import {PaginatorComponent} from '../../../shared/paginator/paginator.component';
import {LoaderComponent} from '../../../shared/loader/loader.component';
import {TitleCasePipe} from '@angular/common';
import {ButtonDirective} from '../../../core/directives/ui/button.directive';

@Component({
  selector: 'kah-pokemon-list',
  imports: [
    PaginatorComponent,
    LoaderComponent,
    TitleCasePipe,
    ButtonDirective
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent extends DestroySubDirective implements OnInit{
  private pokemonService = inject(PokemonService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  readonly pageSize = 10;
  currentPage = signal(1);
  paginatedList = computed(() => {
    const list = this.pokemonService.pokemonList();
    const page = this.currentPage();
    const startIndex = (page - 1) * this.pageSize;
    return list.slice(startIndex, startIndex + this.pageSize);
  });
  totalItems: Signal<number> = computed(() => this.pokemonService.pokemonList().length);

  isLoading = this.pokemonService.isLoading;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.currentPage.set(params['page'] ? +params['page'] : 1);
      });
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
    this.router.navigate([], {queryParams: {page}, relativeTo: this.route});
  }

  navigateToDetails(identifier: string): void {
    this.router.navigate(['/pokemons', 'detail', identifier], {
      queryParams: { page: this.currentPage() }
    });
  }

  refresh() {
    window.location.reload();
  }
}
