import { Injectable } from "@angular/core";
import {Operation} from '../budget/classes/Operation'
import { OperationAjaxService } from "./operation-ajax.service";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class OperationService {
  solde = 1000;
  sum = 0;
  opes = [];
  
    
  constructor(private operationAjaxService:OperationAjaxService){}

    getSolde(solde, opes, sum) {   
       
        for(let ope of opes){
          sum += ope.montant; 
        }      
       return sum;
    }
}