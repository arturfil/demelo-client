import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import services

//import components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dabout', component: AboutComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
