import { Injectable } from '@angular/core';
import { Goal } from '../../data-models/goal';
import { Observable } from 'rxjs';


@Injectable()
export class GoalsService {

  constructor() { }

  fetchGoals(): Observable<Goal[]> {
    return Observable.of([
      { id: 0, name: 'asdf', description: 'blah blah blah' },
      { id: 1, name: 'fghg', description: 'blah blah blah' },
      { id: 2, name: 'ynuny', description: 'blah blah blah' },
    ]);
  }
}
