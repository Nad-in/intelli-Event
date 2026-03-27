import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

export const routes: Routes =[ 
    {path : '', component : HomeComponent},
    
    {path : 'login' , component :LoginComponent},
    {path : 'inscription', component : InscriptionComponent},

    {path : 'event/:id', component : EventDetailComponent}
    
    
];