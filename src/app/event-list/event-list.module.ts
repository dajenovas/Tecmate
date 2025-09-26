import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventListRoutingModule } from './event-list-routing.module';
import { GenzthesisComponent } from './genzthesis/genzthesis.component';
import { IqfusionComponent } from './iqfusion/iqfusion.component';
import { AmongcodersComponent } from './amongcoders/amongcoders.component';
import { EyeonaiComponent } from './eyeonai/eyeonai.component';
import { ThegridvortexComponent } from './thegridvortex/thegridvortex.component';
import { BooyahblitzComponent } from './booyahblitz/booyahblitz.component';
import { ClickclashComponent } from './clickclash/clickclash.component';
import { CrescendoarenaComponent } from './crescendoarena/crescendoarena.component';
import { FilmyfrenzyComponent } from './filmyfrenzy/filmyfrenzy.component';
import { CluexpressComponent } from './cluexpress/cluexpress.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GenzthesisComponent,
    IqfusionComponent,
    AmongcodersComponent,
    EyeonaiComponent,
    ThegridvortexComponent,
    BooyahblitzComponent,
    ClickclashComponent,
    CrescendoarenaComponent,
    FilmyfrenzyComponent,
    CluexpressComponent
  ],
  imports: [
    CommonModule,
    EventListRoutingModule,
    SharedModule
  ]
})
export class EventListModule { }
