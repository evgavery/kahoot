import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailAbilitiesComponent } from './pokemon-detail-abilities.component';

describe('PokemonDetailAbilitiesComponent', () => {
  let component: PokemonDetailAbilitiesComponent;
  let fixture: ComponentFixture<PokemonDetailAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailAbilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
