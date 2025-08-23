import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsMainComponent } from './events-main/events-main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from "../shared/shared.module";
import { TechnicalEventsComponent } from './technical-events/technical-events.component';


@NgModule({
  declarations: [
    EventsMainComponent,
    TechnicalEventsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    EventsRoutingModule,
    FontAwesomeModule
]
})
export class EventsModule { }
