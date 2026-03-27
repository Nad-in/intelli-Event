export class Commentaire {
    codeCom!: number;
    contenu : string;
    dateCom : Date;
    constructor(contenu: string , dateCom : Date){
        this.contenu=contenu;
        this.dateCom=dateCom;
    }
}
