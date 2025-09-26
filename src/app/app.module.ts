import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutModule } from './about/about.module';
import { EventsModule } from './events/events.module';
import { ContactModule } from './contact/contact.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EventListModule } from './event-list/event-list.module';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    FontAwesomeModule,
    AboutModule,
    EventsModule,
    ContactModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    EventListModule
  ],
  providers: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
