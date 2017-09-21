import { Component } from '@angular/core';
import {Operation} from './classes/Operation';
import { OperationService } from '../shared/operation.service';



@Component({
  selector: 'budget-template',
  templateUrl: './budget.component.html',
//   styleUrls: ['./app.component.css']
})
export class BudgetComponent {
solde = 1000;
opes = [];
virmontant:number;
virdescription:string;
retmontant:number;
retdescription:string;

constructor(private operationService:OperationService){
  this.opes = this.operationService.opes;

  }

ngOnInit() {

  }


ajoutVir() {
  this.operationService.ajoutVirement(new Operation(new Date, this.virdescription, this.virmontant));
}

ajoutRetr(){
  this.operationService.ajoutRetrait(new Operation(new Date, this.retdescription, this.retmontant));
}

supp(index:number){
  this.operationService.supprimer(index);
}

// vir(){
//   this.operationService.virement(this.solde, this.retmontant);
// }

// retr(){
//   this.operationService.retrait(this.solde, this.retmontant);
// }

getSolde(){
  this.solde = this.operationService.getSolde();

}

}
