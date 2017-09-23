import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Operation } from "../budget/classes/Operation";

@Injectable()

export class OperationAjaxService{
    private urlApi:string = 'http://localhost:3000/operation';

    constructor(private http:HttpClient){}

    getAllOpes(){
        return this.http.get(this.urlApi).toPromise();
    }

    addOpe(operation:Operation):Promise<Operation>{
        
        return this.http.post<Operation>(this.urlApi, operation).toPromise(); 
    }

    removeOpe(operation:Operation):Promise<any>{
        return this.http.delete(this.urlApi+'/'+operation.id).toPromise();
    }

}