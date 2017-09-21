import { Component } from '@angular/core';
import {Operation} from './classes/Operation'



@Component({
  selector: 'budget-template',
  templateUrl: './budget.component.html',
//   styleUrls: ['./app.component.css']
})
export class BudgetComponent {
solde = 1000;
opes = []
virmontant:number;
virdescription:string;
retmontant:number;
retdescription:string;



afficherVirement() {
  this.opes.push(new Operation(new Date, this.virdescription, this.virmontant));
}

afficherRetrait(){
  this.opes.push(new Operation(new Date, this.retdescription, this.retmontant));
}

supprimer(index:number){
  this.opes.splice(index, 1);
}

virement(){
  console.log(this.solde += this.virmontant);
}

retrait(){
  console.log(this.solde -= this.retmontant);
}

}
