import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalDetailsAsideComponent } from './goal-details-aside/goal-details-aside.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';


import { GoalsService } from './services/goals/goals.service';
import { StaticDataService } from './services/static-data/static-data.service';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    GoalsComponent,
    GoalDetailsAsideComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    GoalsService,
    StaticDataService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
