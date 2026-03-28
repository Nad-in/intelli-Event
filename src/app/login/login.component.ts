import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  message ='';
  user! : User;
  constructor(public auth : AuthService, public router: Router){}

  login() {
    this.auth.login({ email : this.email , password: this.password }).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);

        if(this.user.roles=="participant"){
          this.router.navigate(['/']);
        }

        if(this.user.roles=="organisateur"){
          this.router.navigate(['/org/event/:idOrg'])
        }

        if(this.user.roles=="administrateur"){
          this.router.navigate(['/admin/event'])
        }
      },
      error: () => {
        this.message = 'This compte does not exist';
      }

    });
  }

}
