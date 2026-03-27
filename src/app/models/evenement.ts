export class Evenement {
    idEvent! :number;
    titre : string;
    descriptions : string;
    date : Date;
    lieu : string;
    image : String;
    status : string;
    constructor(titre :string, descriptions :string, date : Date, lieu : string, image :string, status : string){
        this.titre=titre;
        this.descriptions=descriptions;
        this.date=date;
        this.lieu=lieu;
        this.image=image;
        this.status=status;
    }
}
