import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from '../data-models/campaign';


@Component({
  selector: 'app-campaign-details-aside',
  templateUrl: './campaign-details-aside.component.html',
  styleUrls: ['./campaign-details-aside.component.scss']
})
export class CampaignDetailsAsideComponent implements OnInit {
  @Input() campaign: Campaign;

  constructor() { }

  ngOnInit() {
  }

}
