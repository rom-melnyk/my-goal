import { Injectable } from '@angular/core';

@Injectable()
export class StaticDataService {
  title: string = 'My Goal';
  slogan: string = 'Let\'s do it!';
  author: string = 'Roman Melnyk';
  year: number = 2018;

  constructor() {
  }

}
