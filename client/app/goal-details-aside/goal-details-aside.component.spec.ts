import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDetailsAsideComponent } from './goal-details-aside.component';

describe('GoalDetailsAsideComponent', () => {
  let component: GoalDetailsAsideComponent;
  let fixture: ComponentFixture<GoalDetailsAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalDetailsAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalDetailsAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
