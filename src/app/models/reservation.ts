export class Reservation {
    codeR! : number;
    dateR: Date;
    nbplace : number;
    billetN : string;
    prix_B : number;
    constructor(dateR : Date, nbplace : number, billetN : string, prix_B : number){
        this.dateR=dateR;
        this.nbplace=nbplace;
        this.billetN=billetN;
        this.prix_B=prix_B;
    }
}
