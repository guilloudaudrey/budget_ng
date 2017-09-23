import { Component } from '@angular/core';
import { Operation } from './classes/Operation';
import { Depot } from './classes/Depot'
import { Retrait } from './classes/Retrait'
import { OperationService } from '../shared/operation.service';
import { OperationAjaxService } from '../shared/operation-ajax.service';

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




ajoutDep() {
  this.operationService.ajoutDepot(new Depot(new Date, this.virdescription, this.virmontant));
}

ajoutRetr(){
  this.operationService.ajoutRetrait(new Retrait(new Date, this.retdescription, this.retmontant));
}

supp(index:number){
  this.operationService.supprimer(index);
}



getSolde(){
  this.solde = this.operationService.getSolde();

}

constructor(private operationService:OperationService, private operationAjaxService:OperationAjaxService){
  this.depots = this.operationService.depots;
this.retraits = this.operationService.retraits;
  }

ngOnInit() {
  this.operationAjaxService.getAllRetraits().then((todos) => this.retraits = <Object[]>todos);
  }
}