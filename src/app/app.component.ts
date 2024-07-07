import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharactersListComponent} from "./characters-list/characters-list.component";
import {CardsTestComponent} from "./cards-test/cards-test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharactersListComponent, CardsTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AdwentureTime';
}
