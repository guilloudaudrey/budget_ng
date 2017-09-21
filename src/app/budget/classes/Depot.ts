export class Depot {
    id:number;
    date:Date;
    description:string;
    montant:number;

    constructor(date:Date, description:string, montant:number, id?:number){
        this.id = id;
        this.date = date;
        this.description = description;
        this.montant = montant;
    }

}