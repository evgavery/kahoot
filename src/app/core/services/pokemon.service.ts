import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {environment} from '../../../environments/environment';
import {PokemonListItem, PokemonListResponse} from '../models/pokemons/pokemon-list';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs';
import {PokemonDetail} from '../models/pokemons/pokemon-detail';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private http: HttpClient = inject(HttpClient);

  private readonly API_BASE_URL: string = environment.pokemonUrl;
  pokemonList: WritableSignal<PokemonListItem[] | null> = signal<PokemonListItem[] | null>([]);

  fetchPokemonList(): void {
    if (this.pokemonList() !== null && this.pokemonList()!.length > 0) {
      return
    }
    // Since we know the amount of pokemons and want to sort them alphabetically limit is set to 2000
    const url = `${this.API_BASE_URL}/pokemon?limit=2000`;
    this.http.get<PokemonListResponse>(url).pipe(
      map(response => response.results.sort((a, b) => a.name.localeCompare(b.name)))
    ).subscribe({
      next: (sortedList: PokemonListItem[]) => {
        this.pokemonList.set(sortedList);
      },
      error: () => {
        this.pokemonList.set(null);
      }
    });
  }

  clearPokemonList(): void {
    this.pokemonList.set([]);
  }

  fetchPokemonDetails(identifier: number | string) {
    const url = `${this.API_BASE_URL}/pokemon/${identifier}`;
    return this.http.get<PokemonDetail>(url);
  }
}
