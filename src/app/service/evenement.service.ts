import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evenement } from '../models/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  public baseUrl = 'http://localhost:3000/api';

  constructor(public http: HttpClient) { }

  getAllEvent(){
    return this.http.get<Evenement[]>(this.baseUrl+"/event");
  }

  getEventById(id :number){
    return this.http.get<Evenement>(this.baseUrl+"/event/"+id);
  }
}
