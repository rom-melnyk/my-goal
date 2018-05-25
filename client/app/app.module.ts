import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignDetailsAsideComponent } from './campaign-details-aside/campaign-details-aside.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';


import { CampaignsService } from './services/campaigns/campaigns.service';
import { StaticDataService } from './services/static-data/static-data.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    CampaignsComponent,
    CampaignDetailsAsideComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CampaignsService,
    StaticDataService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
