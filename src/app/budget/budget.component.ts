import { Component } from '@angular/core';
import { Operation } from './classes/Operation';
import { Depot } from './classes/Depot'
import { Retrait } from './classes/Retrait'
import { OperationService } from '../shared/operation.service';

@Component({
  selector: 'budget-template',
  templateUrl: './budget.component.html',
//   styleUrls: ['./app.component.css']
})
export class BudgetComponent {
solde = 1000;
depots;
retraits;
virmontant:number;
virdescription:string;
retmontant:number;
retdescription:string;

constructor(private operationService:OperationService){
  this.depots = this.operationService.depots;
this.retraits = this.operationService.retraits;
  }

ngOnInit() {

  }


ajoutDep() {
  this.operationService.ajoutDepot(new Depot(new Date, this.virdescription, this.virmontant));
}

ajoutRetr(){
  this.operationService.ajoutRetrait(new Retrait(new Date, this.retdescription, this.retmontant));
}

suppDep(index:number){
  this.operationService.supprimerDepot(index);
}

suppRetr(index:number){
  this.operationService.supprimerRetrait(index);
}



getSolde(){
  this.solde = this.operationService.getSolde();

}

}