import {Injectable, signal} from '@angular/core';
import {environment} from '../../../environments/environment';
import {PokemonListItem, PokemonListResponse} from '../models/pokemons/pokemon-list';
import { HttpClient } from '@angular/common/http';
import {finalize, map} from 'rxjs';
import {PokemonDetail} from '../models/pokemons/pokemon-detail';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly API_BASE_URL = environment.pokemonUrl;

  pokemonList = signal<PokemonListItem[]>([]);
  isLoading = signal<boolean>(true);

  constructor(private http: HttpClient) { }

  /**
   * Fetches and caches the Pokémon list.
   */
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
        // Optionally handle errors here
      }
    });
  }

  /**
   * Clears the cached Pokémon list.
   */
  clearPokemonList(): void {
    this.pokemonList.set([]);
  }

  /**
   * Fetches detailed information for a single Pokémon.
   */
  getPokemonDetails(identifier: number | string) {
    const url = `${this.API_BASE_URL}/pokemon/${identifier}`;
    return this.http.get<PokemonDetail>(url);
  }
}
