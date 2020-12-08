import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanethuntInventoryComponent } from './planethunt-inventory/planethunt-inventory.component';
import { PlanethuntStartpageComponent } from './planethunt-startpage/planethunt-startpage.component';
import { PlanetHuntTutorialComponent } from './planethunt-tutorial/planethunt-tutorial.component';

const routes: Routes = [
  { path: '', redirectTo: '/startpag', pathMatch: 'full' },
  { path: 'startpage', component: PlanethuntStartpageComponent},
  { path: 'tutorial', component:  PlanetHuntTutorialComponent },
  { path: 'inventory', component: PlanethuntInventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
