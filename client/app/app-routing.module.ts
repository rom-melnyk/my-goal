import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalsComponent } from './goals/goals.component';

const routes: Routes = [
  { path: 'goals', component: GoalsComponent },
  // TODO implement 404 route
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
