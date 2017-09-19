import { Component } from '@angular/core';
import {Operation} from './classes/Operation'

@Component({
  selector: 'budget-template',
  templateUrl: './budget.component.html',
//   styleUrls: ['./app.component.css']
})
export class BudgetComponent {
opes = []

ope: Operation = {
  id: this.opes.length,
  date: new Date,
  description: '',
  montant: 0
}



afficher(){
  console.log(this.ope);
}

}
