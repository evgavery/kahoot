import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailParametersComponent } from './pokemon-detail-parameters.component';

describe('PokemonDetailParametersComponent', () => {
  let component: PokemonDetailParametersComponent;
  let fixture: ComponentFixture<PokemonDetailParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailParametersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
