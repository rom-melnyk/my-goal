import { Component, OnInit } from '@angular/core';
import { Goal } from '../data-models/goal';
import { GoalsService } from '../services/goals/goals.service';


@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: [ './goals.component.scss' ]
})
export class GoalsComponent implements OnInit {
  goals: Goal[] = [];

  selectedGoal: Goal = null;

  constructor(
    private goalsService: GoalsService
  ) {
  }

  ngOnInit() {
    this.goalsService.fetchGoals()
    .subscribe(goals => this.goals = goals);
  }

  onGoalNameClick(goal: Goal) {
    this.selectedGoal = this.selectedGoal === goal ? null : goal;
  }

  onActionClick(goal: Goal) {
    console.log(`Goal "${goal.name}" clicked`);
  }
}
