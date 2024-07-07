import { Component, OnInit } from '@angular/core';
import { CharactersItemComponent } from '../characters-item/characters-item.component';
import { NgClass, NgForOf } from '@angular/common';
import { CharacterService } from '../services/character.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [
    CharactersItemComponent,
    NgForOf,
    NgClass,
    RouterOutlet,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css',
})
export class CharactersListComponent implements OnInit {
  chosenCharacter: string;
  search = ''
  characters: { img: string; name: string; color: string; id: string }[] = [];
  filterCharacters: { img: string; name: string; color: string; id: string }[] = [];
  constructor(public characterService: CharacterService) {}
  ngOnInit() {
    this.characters = this.characterService.characters;
    this.filterCharacters = this.characters
  }
  deleteButton(id: string) {
    this.characterService.deleteCharacter(id);
  }
  choseCharacter(id: string) {
    this.chosenCharacter = id;
  }
  filterCharacter(name: string) {
    this.filterCharacters = this.characters.filter((element) => {
      if (element.name.includes(name) ) {
        return true;
      } else {
        return false;
      }
    });
  }
}
