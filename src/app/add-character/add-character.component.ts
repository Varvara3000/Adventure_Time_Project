import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../services/character.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-character',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  constructor(private service: CharacterService, private  router:Router) {}
  name: string = '';
  inputImg: string = '';
  details:string = '';
  save():void {
    this.service.addCharacter({
      img: this.inputImg,
      name: this.name,
      color: '#8FBC8F',
      id: this.service.characters[this.service.characters.length - 1].id + 1
    });
    this.service.addDetail({
      description:this.details,
      id:this.service.charactersDetails[this.service.charactersDetails.length - 1].id +1,
      color:'#F88017'
    })
    this.router.navigate([''])
  }
}

