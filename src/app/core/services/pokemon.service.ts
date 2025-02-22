import {Injectable, signal} from '@angular/core';
import {environment} from '../../../environments/environment';
import {PokemonListItem, PokemonListResponse} from '../models/pokemons/pokemon-list';
import { HttpClient } from '@angular/common/http';
import {finalize, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly API_BASE_URL = environment.pokemonUrl;

  pokemonList = signal<PokemonListItem[]>([]);
  isLoading = signal<boolean>(false);

  constructor(private http: HttpClient) { }


  fetchPokemonList(): void {
    this.isLoading.set(true);
    const url = `${this.API_BASE_URL}/pokemon?limit=10000`;
    this.http.get<PokemonListResponse>(url).pipe(
      map(response => response.results.sort((a, b) => a.name.localeCompare(b.name))),
      finalize(() => this.isLoading.set(false))
    ).subscribe({
      next: (sortedList: PokemonListItem[]) => {
        this.pokemonList.set(sortedList);
      },
      error: () => {
        // TODO: errors
      }
    });
  }

  clearPokemonList(): void {
    this.pokemonList.set([]);
  }
}
