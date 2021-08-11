import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent implements OnInit {


@Input('pokemon')
  public pokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
