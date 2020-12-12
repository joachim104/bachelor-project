import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanethuntCorrectanswerComponent } from './planethunt-correctanswer/planethunt-correctanswer.component';
import { PlanethuntHighscoreComponent } from './planethunt-highscore/planethunt-highscore.component';
import { PlanethuntInventoryComponent } from './planethunt-inventory/planethunt-inventory.component';
import { PlanethuntSignupComponent } from './planethunt-signup/planethunt-signup.component';
import { PlanethuntStartpageComponent } from './planethunt-startpage/planethunt-startpage.component';
import { PlanetHuntTutorialComponent } from './planethunt-tutorial/planethunt-tutorial.component';
import { PlanethuntWordpuzzleComponent } from './planethunt-wordpuzzle/planethunt-wordpuzzle.component';

const routes: Routes = [
  { path: '', redirectTo: '/startpag', pathMatch: 'full' },
  { path: 'startpage', component: PlanethuntStartpageComponent},
  { path: 'tutorial', component:  PlanetHuntTutorialComponent },
  { path: 'inventory', component: PlanethuntInventoryComponent },
  { path: 'wordpuzzle', component: PlanethuntWordpuzzleComponent },
  { path: 'signup', component: PlanethuntSignupComponent },
  { path: 'correctanswer', component: PlanethuntCorrectanswerComponent },
  { path: 'highscore', component: PlanethuntHighscoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
