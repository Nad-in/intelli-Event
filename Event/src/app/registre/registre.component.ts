
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent {
  nom = '';
  prenom = '';
  email = '';
  password = '';
  roles = 'participant';

  constructor(private eventService: EventService, private router: Router) {}

  onRegister() {
    const data = { 
      nom: this.nom, 
      prenom: this.prenom, 
      email: this.email, 
      password: this.password, 
      roles: this.roles 
    };
    
    this.eventService.register(data).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => {
        alert(err.error.message || "Erreur d'inscription");
      }
    });
  }
}