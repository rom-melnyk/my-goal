import { Component, OnInit } from '@angular/core';
import { Goal } from '../data-models/goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goals: Goal[] = [
      { id: 0, name: 'asdf', description: 'blah blah blah' },
      { id: 1, name: 'fghg', description: 'blah blah blah' },
      { id: 2, name: 'ynuny', description: 'blah blah blah' },
  ];

  selectedGoal: Goal = null;

  constructor() { }

  ngOnInit() {
  }

    onGoalNameClick(goal: Goal) {
        this.selectedGoal = this.selectedGoal === goal ? null : goal;
    }

    onActionClick(goal: Goal) {
        console.log(`Goal "${goal.name}" clicked`);
    }
}
