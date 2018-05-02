import { Component, Input, OnInit } from '@angular/core';
import { Goal } from '../data-models/goal';


@Component({
  selector: 'app-goal-details-aside',
  templateUrl: './goal-details-aside.component.html',
  styleUrls: ['./goal-details-aside.component.scss']
})
export class GoalDetailsAsideComponent implements OnInit {
  @Input() goal: Goal;

  constructor() { }

  ngOnInit() {
  }

}
