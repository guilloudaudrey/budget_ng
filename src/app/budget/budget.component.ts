import { Component } from '@angular/core';
import {Operation} from './classes/Operation'

@Component({
  selector: 'budget-template',
  templateUrl: './budget.component.html',
//   styleUrls: ['./app.component.css']
})
export class BudgetComponent {
opes = []
montant:number;
description:string;


ajouter() {
  this.opes.push(new Operation(new Date, this.description, this.montant));

}

afficher(){
  console.log(this.opes);
}

}
