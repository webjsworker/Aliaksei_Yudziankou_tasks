import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';
import { FeetbackComponent } from './feetback/feetback.component';
import { FindComponent } from './find/find.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
path: '',
component: HomeComponent
  },
  {
path: 'about',
component: AboutComponent
  },
  {
path: 'find',
component: FindComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'feetback',
    component: FeetbackComponent
  },
  
];    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
