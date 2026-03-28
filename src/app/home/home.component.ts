import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Evenement } from '../models/evenement';
import { EvenementService } from '../service/evenement.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  eventt : Evenement[] = [];
  constructor(public EventService: EvenementService){
    this.EventService.getAllEvent().subscribe(
      data=>{this.eventt=data}
    )
  }
}
