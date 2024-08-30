import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters-item',
  standalone: true,
  imports: [NgStyle, RouterLink, NgClass, NgIf],
  templateUrl: './characters-item.component.html',
  styleUrl: './characters-item.component.css',
})
export class CharactersItemComponent {
  @Input() chosenCharacter: string;
  @Input() character: { img: string; name: string; color: string; id: string };
  @Output() characterDelete = new EventEmitter();
  @Output() chosedCharacter = new EventEmitter<any>();
  choseCharacter(id: string) {
    this.chosedCharacter.emit(id);
  }
  deleteCharacter(id: string, event: any) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.characterDelete.emit(id);
  }

}
