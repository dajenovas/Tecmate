import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { AboutMainComponent } from './about/about-main/about-main.component';
import { EventsMainComponent } from './events/events-main/events-main.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { GenzthesisComponent } from './event-list/genzthesis/genzthesis.component';
import { IqfusionComponent } from './event-list/iqfusion/iqfusion.component';
import { AmongcodersComponent } from './event-list/amongcoders/amongcoders.component';
import { EyeonaiComponent } from './event-list/eyeonai/eyeonai.component';
import { ThegridvortexComponent } from './event-list/thegridvortex/thegridvortex.component';
import { BooyahblitzComponent } from './event-list/booyahblitz/booyahblitz.component';
import { ClickclashComponent } from './event-list/clickclash/clickclash.component';
import { CrescendoarenaComponent } from './event-list/crescendoarena/crescendoarena.component';
import { FilmyfrenzyComponent } from './event-list/filmyfrenzy/filmyfrenzy.component';
import { CluexpressComponent } from './event-list/cluexpress/cluexpress.component';
import { Fixtures } from './testing/fixtures/fixtures';

const routes: Routes = [
  {
    path:'',
    component:HomeMainComponent
  },
  {
    path:'home',
    component: HomeMainComponent
  },
  {
    path:'about',
    component:AboutMainComponent
  },
  {
    path:'events',
    component: EventsMainComponent
  },
  {
    path:'contact',
    component: ContactMainComponent
  },
  {
    path:'genzthesis',
    component:GenzthesisComponent
  },
  {
    path:'iqfusion',
    component:IqfusionComponent
  },
  {
    path:'amongcoders',
    component: AmongcodersComponent
  },
  {
    path:'eyeonai',
    component:EyeonaiComponent
  },
  {
    path:'thegridvortex',
    component: ThegridvortexComponent
  },
  {
    path:'booyahblitz',
    component: BooyahblitzComponent
  },
  {
    path:'clickclash',
    component:ClickclashComponent
  },
  {
    path:'crescendoarena',
    component: CrescendoarenaComponent
  },
  {
    path:'filmyfrenzy',
    component: FilmyfrenzyComponent
  },
  {
    path:'cluexpress',
    component:CluexpressComponent
  },


  // Testing Routes


  {
    path:'fixture',
    component:Fixtures
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // scrolls to top on route change
      anchorScrolling: 'enabled'            // optional, for #anchor navigation
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
