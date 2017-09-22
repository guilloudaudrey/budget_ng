import { Injectable } from "@angular/core";
import {HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise'

@Injectable()

export class OperationAjaxService{
    private urlApi:string = 'http://localhost:3000/db';

    constructor(private http:HttpClient){}

    getAllOperations(){
        return this.http.get(this.urlApi).toPromise();
    }
}