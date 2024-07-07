import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cards-test',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    FormsModule
  ],
  templateUrl: './cards-test.component.html',
  styleUrl: './cards-test.component.css'
})
export class CardsTestComponent {
cards = [1,2,3,4,5]
  chosenCard = 0
  inputNumber :any
choseCardButton(card:number){
  this.chosenCard = card
}
resetCardButton(){
  this.chosenCard = 0
}
deleteCardButton(){
  const index = this.cards.findIndex(element => element === this.chosenCard );
  if (this.chosenCard != 0 ) {
    this.cards.splice(index, 1);
  }
  this.chosenCard = 0
}
  addCardButton(){
  const foundNumber = this.cards.find((element)=>{
    if (element == this.inputNumber){
      return true
    }else {
      return false
    }
  })
  if (this.inputNumber !== undefined  &&  foundNumber === undefined) {
    this.cards.push(this.inputNumber)
  }
  this.inputNumber = null
  }
}
