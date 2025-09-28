import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing-module';
import { Fixtures } from './fixtures/fixtures';


@NgModule({
  declarations: [
    Fixtures
  ],
  imports: [
    CommonModule,
    TestingRoutingModule
  ]
})
export class TestingModule { }
