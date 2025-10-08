import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing-module';
import { Fixtures } from './fixtures/fixtures';
import { EventCard } from './event-card/event-card';


@NgModule({
  declarations: [
    Fixtures,
    EventCard
  ],
  imports: [
    CommonModule,
    TestingRoutingModule
  ]
})
export class TestingModule { }
