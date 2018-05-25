import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignsComponent } from './campaigns/campaigns.component';

const routes: Routes = [
  { path: 'campaigns', component: CampaignsComponent },
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
