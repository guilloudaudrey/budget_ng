import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { BudgetComponent } from './budget/budget.component';
import { OperationService } from './shared/operation.service';
import { OperationAjaxService } from './shared/operation-ajax.service';
import { HttpClientModule } from '@angular/common/http';
import { GraphComponent } from './graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    GraphComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    OperationService,
    OperationAjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
