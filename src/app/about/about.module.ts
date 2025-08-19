import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent } from './about-main/about-main.component';
import { LeadershipTeamComponent } from './leadership-team/leadership-team.component';
import { OrganizingTeamComponent } from './organizing-team/organizing-team.component';
import { SharedModule } from '../shared/shared.module';
import { HomeMainComponent } from '../home/home-main/home-main.component';
import { HomeModule } from '../home/home.module';
import { BackgroundComponent } from './background/background.component';


@NgModule({
  declarations: [
    AboutMainComponent,
    LeadershipTeamComponent,
    OrganizingTeamComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
