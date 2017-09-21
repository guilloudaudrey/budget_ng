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
    
    ajoutVirement(operation:Operation) {
      this.opes.push(operation);
    }
    
    ajoutRetrait(operation:Operation){
      this.opes.push(operation);
    }
    
    supprimer(index:number){
      this.opes.splice(index,1);
    }
    
    // virement(solde, virmontant){
    //   console.log(solde += virmontant);
    // }
    
    // retrait(solde, retmontant){
    //   console.log(solde -= retmontant);
    // }
}
