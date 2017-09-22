export class Retrait{
    id:number;
    date:Date;
    description:string;
    montant:number;

    constructor(date:Date, description:string, retrait:number, id?:number){
        this.id = id;
        this.date = date;
        this.description = description;
        this.montant = retrait;
    }

}