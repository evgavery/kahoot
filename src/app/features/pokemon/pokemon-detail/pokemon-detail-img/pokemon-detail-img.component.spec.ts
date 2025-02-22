import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailImgComponent } from './pokemon-detail-img.component';

describe('PokemonDetailImgComponent', () => {
  let component: PokemonDetailImgComponent;
  let fixture: ComponentFixture<PokemonDetailImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
