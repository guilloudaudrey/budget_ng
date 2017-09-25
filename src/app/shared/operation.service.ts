import { Injectable } from "@angular/core";
import {Operation} from '../shared/Operation'
import { OperationAjaxService } from "./operation-ajax.service";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class OperationService {
  solde = 1500;
  sum = 0;
  opes = [];
  
    returnSolde(){
      return this.solde;
    }
  

    getSolde(solde, opes, sum) {   
       
        for(let ope of opes){
          sum += ope.montant; 
        }      
       return sum;
    }
}