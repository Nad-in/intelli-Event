import {User} from './user';

export class Administrateur extends User{
    constructor(nom: string, prenom: string, email: string, password: string, roles: string){
        super(nom,prenom,email,password,roles);
    }
}
