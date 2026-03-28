import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { OrgEventListComponent } from './org-event-list/org-event-list.component';
import { AdminEventListComponent } from './admin-event-list/admin-event-list.component';

export const routes: Routes =[ 
    {path : '', component : HomeComponent},
    
    {path : 'login' , component :LoginComponent},
    {path : 'inscription', component : InscriptionComponent},

    {path : 'event/:id', component : EventDetailComponent},

    {path : 'org/event/:idOrg', component : OrgEventListComponent},
    {path : 'admin/event', component : AdminEventListComponent}

    
    
];