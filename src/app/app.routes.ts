import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {
    path: 'pokemons',
    loadComponent: () =>
      import('./features/pokemon/pokemon.component').then(m => m.PokemonComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/pokemon/pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent)
      },
      {
        path: 'detail/:id',
        loadComponent: () =>
          import('./features/pokemon/pokemon-detail/pokemon-detail.component').then(m => m.PokemonDetailComponent)
      }
    ]
  },
  {path: '**', redirectTo: 'pokemons'}
]
