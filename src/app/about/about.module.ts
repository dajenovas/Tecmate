import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent } from './about-main/about-main.component';
import { SharedModule } from '../shared/shared.module';
import { HomeMainComponent } from '../home/home-main/home-main.component';
import { HomeModule } from '../home/home.module';
import { BackgroundComponent } from './background/background.component';
import { OrganisersComponent } from './organisers/organisers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AboutMainComponent,
    BackgroundComponent,
    OrganisersComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports : [
    BackgroundComponent
  ]
})
export class AboutModule { }
