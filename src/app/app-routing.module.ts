import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { AboutMainComponent } from './about/about-main/about-main.component';

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
    path:'home',
    component: HomeMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
