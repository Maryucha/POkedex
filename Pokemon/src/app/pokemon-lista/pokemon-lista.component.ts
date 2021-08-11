import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.sass']
})
export class PokemonListaComponent implements OnInit {

  constructor(public service: PokemonService) { }

  ngOnInit(): void {
  }

}
