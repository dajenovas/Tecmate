import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { SharedModule } from '../shared/shared.module';
import { BackgroundComponent } from './background/background.component';
import { OpenComponent } from './open/open.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    HomeMainComponent,
    BackgroundComponent,
    OpenComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
