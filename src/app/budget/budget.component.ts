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
opes;
virmontant:number;
virdescription:string;
retmontant:number;
retdescription:string;




// ajoutDep() {
//   this.operationService.ajoutDepot(new Depot(new Date, this.virdescription, this.virmontant));
// }

// ajoutRetr(){
//   this.operationService.ajoutRetrait(new Retrait(new Date, this.retdescription, this.retmontant));
// }

// supp(index:number){
//   this.operationService.supprimer(index);
// }



getSolde(){
  this.solde = this.operationService.getSolde();

}

constructor(private operationService:OperationService, private operationAjaxService:OperationAjaxService){
  this.opes = this.operationService.opes;

  }

ngOnInit() {
  this.operationAjaxService.getAllOpes().then((todos) => this.opes = <Object[]>todos);
  }

  addOpe(){
    this.operationAjaxService.addOpe({date: new Date, montant: this.virmontant, description: this.virdescription}).then((operation) => this.opes.push(operation));;
  }

  removeOpe(index:number){
    this.operationAjaxService.removeOpe({id: index, date: new Date, montant: 0, description: 'null'}).then(() => this.opes = this.opes.filter((operation) => operation.id !=index) );
  }
}