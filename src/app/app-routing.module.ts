import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { TrainFormComponent } from './core/home/train-form/train-form.component';
import { TrainInfoComponent } from './core/home/train-info/train-info.component';
import { MyTicketComponent } from './core/my-ticket/my-ticket.component';

const routes: Routes = [
  {path: 'train-list', component: HomeComponent},
  {path: 'train-list/:id', component: TrainInfoComponent},
  {path: 'train-list/:id/form', component: TrainFormComponent},
  {path: 'my-tickets', component: MyTicketComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'train-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
