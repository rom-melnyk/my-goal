import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goal_1 = { id: 0, name: 'asdf', description: 'blah blah blah' };

  goals = [
      { id: 0, name: 'asdf', description: 'blah blah blah' },
      { id: 1, name: 'fghg', description: 'blah blah blah' },
      { id: 2, name: 'ynuny', description: 'blah blah blah' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
