import { Component } from '@angular/core';
import { Evenement } from '../models/evenement';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EvenementService } from '../service/evenement.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-event-detail',
  imports: [RouterModule, FormsModule],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent {
  event! : Evenement;

  constructor(public route : ActivatedRoute, public EventService : EvenementService,){
    const id = this.route.params.subscribe( params =>{
      const id = params['id'];
      if (id){
        this.EventService.getEventById(id).subscribe(data => {this.event= data});
      }
    })
  }
}
