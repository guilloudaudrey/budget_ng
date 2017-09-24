import { Component } from '@angular/core';
import { Operation } from './classes/Operation';
import { OperationService } from '../shared/operation.service';
import { OperationAjaxService } from '../shared/operation-ajax.service';

@Component({
  selector: 'budget-template',
  templateUrl: './budget.component.html',
//   styleUrls: ['./app.component.css']
})
export class BudgetComponent {
solde = 1000;
sum = 0;
opes;
virements;
virmontant:number;
virdescription:string;
retmontant:number = this.retmontant* -1;
retdescription:string;

constructor(private operationService:OperationService, private operationAjaxService:OperationAjaxService){}

ngOnChange(){
  
}

ngOnInit() {
  this.operationAjaxService.getAllOpes().then((operations) => this.opes = <Object[]>operations);

   
  }

  addOpe(montant, description){
    this.operationAjaxService.addOpe({
      date: new Date, 
      montant: montant, 
      description: description
    })
      .then((operation) => this.opes.push(operation));;
  }

  removeOpe(index:number){
    this.operationAjaxService.removeOpe({
      id: index, 
      date: new Date, 
      montant: 0, 
      description: 'null'
    })
    .then(() => this.opes = this.opes.filter((operation) => operation.id !=index) );
  }

  getSolde(){
this.solde = this.operationService.getSolde(this.solde, this.opes, this.sum);
    }
  }
  


