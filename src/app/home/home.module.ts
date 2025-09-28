import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { SharedModule } from '../shared/shared.module';
import { BackgroundComponent } from './background/background.component';
import { OpenComponent } from './open/open.component';
import { OverviewComponent } from './overview/overview.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { CountdownComponent } from './countdown/countdown.component';
import { AboutModule } from '../about/about.module';


@NgModule({
  declarations: [
    HomeMainComponent,
    BackgroundComponent,
    OpenComponent,
    OverviewComponent,
    SponsorComponent,
    CountdownComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
