import { Injectable } from "@angular/core";
import {Operation} from '../budget/classes/Operation'

@Injectable()

export class OperationService {
  solde = 1000;
  opes = [];
    
   
    getSolde():number {
        let solde = this.solde;
        for(let ope of this.opes){
          solde += ope.montant;   
        }
     
        return solde;
    }
 
    ajoutDepot(operation:Operation) {
      this.opes.push(operation);
    }
    
    // ajoutRetrait(operation:Operation){
    //   this.retraits.push(operation);
    // }
    
    supprimer(index:number){
      this.opes.splice(index,1);
    
    }
    

}