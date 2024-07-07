import { Routes } from '@angular/router';
import {CharactersListComponent} from "./characters-list/characters-list.component";
import {CharactersDetailComponent} from "./characters-detail/characters-detail.component";
import {AddCharacterComponent} from "./add-character/add-character.component";

export const routes: Routes = [
  {path:'',component:CharactersListComponent},
  {path:'add-character',component:AddCharacterComponent},
  {path:':id',component:CharactersDetailComponent},

];
