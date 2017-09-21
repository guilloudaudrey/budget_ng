import { Injectable } from "@angular/core";
import {Operation} from '../budget/classes/Operation'

@Injectable()

export class OperationService {
    solde = 1000;
    opes = []
    virmontant:number;
    virdescription:string;
    retmontant:number;
    retdescription:string;
    
    
    afficherVirement(operation:Operation) {
      this.opes.push(operation);
    }
    
    afficherRetrait(operation:Operation){
      this.opes.push(operation);
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
