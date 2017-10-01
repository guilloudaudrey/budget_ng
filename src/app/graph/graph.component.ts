import { Component, OnInit } from '@angular/core';
import { OperationAjaxService } from '../shared/operation-ajax.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
opes;
month = 0;

  constructor(private operationAjaxService:OperationAjaxService) { }

  ngOnInit() {
    this.operationAjaxService.getAllOpes().then((operations) => this.opes = <Object[]>operations);
    }

    ngDoCheck(){
      for (let ope of this.opes){
        this.month += ope.montant;
      }
      return this.month;
    }
}
