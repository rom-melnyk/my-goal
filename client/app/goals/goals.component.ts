import { Component, OnInit } from '@angular/core';
import { GoalInterface } from '../data-models/goal-interface';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goals: GoalInterface[] = [
      { id: 0, name: 'asdf', description: 'blah blah blah' },
      { id: 1, name: 'fghg', description: 'blah blah blah' },
      { id: 2, name: 'ynuny', description: 'blah blah blah' },
  ];

  constructor() { }

  ngOnInit() {
  }

    onActionClick(goal: GoalInterface) {
        console.log(`Goal "${goal.name}" clicked`);
    }
}
