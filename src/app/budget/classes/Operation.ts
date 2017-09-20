export class Operation{
    id:number;
    date:Date;
    description:string;
    montant:number;

    constructor(date:Date, description:string, montant:number){
      
        this.date = date;
        this.description = description;
        this.montant = montant;
    }
}