import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-characters-detail',
  standalone: true,
  imports: [NgStyle, RouterLink],
  templateUrl: './characters-detail.component.html',
  styleUrl: './characters-detail.component.css',
})
export class CharactersDetailComponent implements OnInit {
  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
  ) {}
  charactersDetail:
    | { description: string; id: string; color: string }
    | undefined;
  ngOnInit() {
    this.charactersDetail = this.characterService.getDetailById(
      this.route.snapshot.params['id'],
    );
  }
}
