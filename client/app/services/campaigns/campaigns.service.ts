import { Injectable } from '@angular/core';
import { Campaign } from '../../data-models/campaign';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CampaignsService {
  private CAMPAIGNS_API_PATH: string = '/api/campaigns';

  constructor(
    private http: HttpClient
  ) { }

  fetchCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.CAMPAIGNS_API_PATH);
  }
}
