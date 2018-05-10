import { Component, OnInit } from '@angular/core';
import { Campaign } from '../data-models/campaign';
import { CampaignsService } from '../services/campaigns/campaigns.service';


@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: [ './campaigns.component.scss' ]
})
export class CampaignsComponent implements OnInit {
  campaigns: Campaign[] = [];

  selectedCampaign: Campaign | null = null;

  constructor(
    private campaignsService: CampaignsService
  ) {
  }

  ngOnInit() {
    this.campaignsService.fetchCampaigns()
    .subscribe(campaigns => this.campaigns = campaigns);
  }

  onCampaignNameClick(campaign: Campaign) {
    this.selectedCampaign = this.selectedCampaign === campaign ? null : campaign;
  }

  onActionClick(campaign: Campaign) {
    console.log(`Campaign "${campaign.name}" clicked`);
  }
}
