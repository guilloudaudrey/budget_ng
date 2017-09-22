import { Injectable } from "@angular/core";
import {Operation} from '../budget/classes/Operation'

@Injectable()

export class OperationService {
  solde = 1000;
    depots = [];
    retraits = [];
    
   
    getSolde():number {
        let solde = this.solde;
        for(let ope of this.depots){
          solde += ope.montant;   
        }
        for (let ope of this.retraits){
          solde -= ope.montant;
        }
        return solde;
    }
 
    ajoutDepot(operation:Operation) {
      this.depots.push(operation);
    }
    
    ajoutRetrait(operation:Operation){
      this.retraits.push(operation);
    }
    
    supprimerDepot(index:number){
      this.depots.splice(index,1);
    }

    supprimerRetrait(index:number){
      this.retraits.splice(index,1);
    }

    

}