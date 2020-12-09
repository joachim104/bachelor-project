import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanethuntStartpageComponent } from './planethunt-startpage/planethunt-startpage.component';
import { PlanetHuntTutorialComponent } from './planethunt-tutorial/planethunt-tutorial.component';
import { PlanethuntInventoryComponent } from './planethunt-inventory/planethunt-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanethuntStartpageComponent,
    PlanetHuntTutorialComponent,
    PlanethuntInventoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
