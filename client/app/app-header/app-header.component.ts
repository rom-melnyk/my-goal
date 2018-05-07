import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../services/static-data/static-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  title: string;
  slogan: string;

  constructor(
    private staticData: StaticDataService
  ) { }

  ngOnInit() {
    this.title = this.staticData.title;
    this.slogan = this.staticData.slogan;
  }

}
