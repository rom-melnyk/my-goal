import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../services/static-data/static-data.service';
import { Router, Event, NavigationEnd, } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { parse as urlParse } from 'url';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  title: string;
  slogan: string;
  currentLocation: string = '';

  constructor(
    private staticData: StaticDataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.title = this.staticData.title;
    this.slogan = this.staticData.slogan;
    this.router.events
      .filter((e: Event) => e instanceof NavigationEnd)
      .map((event: NavigationEnd) => urlParse(event.url).pathname)
      .subscribe((path: string) => {
        this.currentLocation = path;
      });
  }

}
