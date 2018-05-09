import { Injectable } from '@angular/core';
import { Goal } from '../../data-models/goal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GoalsService {
  private GOALS_API_PATH: string = '/api/campaigns';

  constructor(
    private http: HttpClient
  ) { }

  fetchGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.GOALS_API_PATH);
    // return Observable.of([
    //   { id: 0, name: 'asdf', description: 'blah blah blah' },
    //   { id: 1, name: 'fghg', description: 'blah blah blah' },
    //   { id: 2, name: 'ynuny', description: 'blah blah blah' },
    // ]);
  }
}
