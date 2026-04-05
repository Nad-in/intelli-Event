import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  imports: [RouterLink, FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {

    nom = '';
  prenom = '';
  email = '';
  password = '';
  confirmPassword = '';
  roles = 'participant';

  message = '';

  constructor(public auth: AuthService, public router: Router){}

  register() {
    if(this.password !== this.confirmPassword){
      this.message = "Mot de passe non identique";
      return;
    }

    this.auth.register({nom: this.nom, prenom: this.prenom, email: this.email, password: this.password, roles: this.roles}).subscribe({
      next: res => {
        this.message = "Compte créé avec succès";

        if(this.roles == "participant"){
          this.router.navigate(['/']);
        }

        if(this.roles == "organisateur"){
          this.router.navigate(['/login']); 
        }

        if(this.roles == "administrateur"){
          this.router.navigate(['/login']);
        }
      },

      error: () => {
        this.message = "Erreur inscription";
      }

    });
  }
}
