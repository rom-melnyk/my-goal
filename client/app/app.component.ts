import { Component, OnInit } from '@angular/core';
import { StaticDataService } from './services/static-data/static-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Goal';

  constructor(
    private staticData: StaticDataService
  ) {
  }

  ngOnInit() {
    this.title = this.staticData.title;
  }
}
