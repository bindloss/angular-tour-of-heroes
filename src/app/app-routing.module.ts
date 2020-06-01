import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// tells the Router which virwe to display when a user clicks a link or pastes a url.
// path: a string that matches the url in the browser address bar
// component: the component that the router should create when navigating to this route
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent } // the colon (:) indicates that : is a placeholder for an id
];

// initailises the router and starts it listening for browser location changes
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
