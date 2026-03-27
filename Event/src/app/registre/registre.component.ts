
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent {
  nom: string;
  prenom: string;
  email: string;
  password: string;

  constructor(private router: Router) {
    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.password = '';
  }

  onRegister() {
    console.log('Nom:', this.nom);
    this.router.navigate(['/login']);
  }
}