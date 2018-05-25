import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../services/static-data/static-data.service';


@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {
  title: string;
  slogan: string;
  author: string;
  year: number;

  constructor(
    private staticData: StaticDataService
  ) { }

  ngOnInit() {
    this.title = this.staticData.title;
    this.slogan = this.staticData.slogan;
    this.author = this.staticData.author;
    this.year = this.staticData.year;
  }

}
