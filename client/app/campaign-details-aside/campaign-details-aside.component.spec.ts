import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailsAsideComponent } from './campaign-details-aside.component';

describe('CampaignDetailsAsideComponent', () => {
  let component: CampaignDetailsAsideComponent;
  let fixture: ComponentFixture<CampaignDetailsAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignDetailsAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDetailsAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
