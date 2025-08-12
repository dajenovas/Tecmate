import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';

const routes: Routes = [
  {
    path:'',
    component:HomeMainComponent
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
